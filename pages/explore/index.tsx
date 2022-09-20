import { useEffect, useRef, useState } from "react";
import { Header } from "../../components/main/common/header.com";
import styles from "./home.module.less";
import { useObserver } from "mobx-react";
import { Web3Head } from "../../components/main/common/head.com";
import { WalletStore } from "../../stores/main/wallet.store";
import { useRouter } from "next/router";
import { Trans } from "@lingui/react";
import { OfferStore } from "../../stores/main/offer.store";
import useStore from "../../stores/useStore";
import { t } from "@lingui/macro";
import {
  Button,
  Form,
  Input,
  message,
  Pagination,
  Select,
  Table,
  Tag,
} from "antd";
import { NFTStore } from "../../stores/main/nfts.store";
import { NFT } from "../../components/main/common/nft";
import { Offers } from "../../stores/main/solpass.store";
import moment from "moment";
import { web3Config } from "../../stores/config";
import { Footer } from "../../components/main/common/footer.com";
import wallet from "../../contracts/wallet";

export default function Offer(props: {
  offerId?: number;
}) {
  const walletStore = useStore(WalletStore);


  const router = useRouter();
  const { id } = router.query;
  const [offers, setOffers] = useState<Offers[]>([]);
  const [address, setAddress] = useState("");
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const columns: any = [
    {
      title: 'Solpass Name',
      dataIndex: "name",
      key: "name",
      render: (_, record) => {
        return (
          <span>
            {record.nftName}
          </span>
        );
      },
    },
    {
      title: 'Issuer',
      dataIndex: "issuer",
      key: "issuer",
      render: (_, record) => {
        return (
          <span>
            <a
              href={`${web3Config.scan}${record.Iaddress}`}
              target="_blank"
              style={{ color: "#F41870" }}
            >
              {record.Aname}
            </a>
            <br />
          </span>
        );
      },
    },
    {
      title: 'Solpass Address',
      dataIndex: "address",
      key: "address",
      render: (_, record) => {
        return (
          <span>
            <a
              href={`${web3Config.scan}${record.Caddress}`}
              target="_blank"
              style={{ color: "#F41870" }}
            >
              {record.Caddress}
            </a>
            <br />
          </span>
        );
      },
    },
    {
      title: 'Status',
      dataIndex: "card",
      key: "card",
      render: (_, record) => {
        return <Tag color={"#F41870"}>{record.minted ? "minted" : "pending"}</Tag>;
      },
    },
    {
      title: "Token ID",
      dataIndex: "look",
      key: "look",
      render: (_, record) => {
        return (
          <span>
            <a href={`${web3Config.opensea}${record.Caddress}/${record.tokenId}`} target="_blank">
              {record.minted ? "Token #" + record.tokenId : "----"}
            </a>
            <br />
          </span>
        );
      },
    },
    {
      title: 'Expiration Date',
      dataIndex: "expiresAt",
      key: "expiresAt",
      render: (_, record) => {
        return (
          <div>
            <br />
            <span style={{ color: "#687182" }}>
              {record.expirationDate
                ? moment(record.expirationDate).format("YYYY-MM-DD")
                : "Never Expires"}
            </span>
          </div>
        );
      },
    },
  ];
  async function getOffers(address?: string) {
    const result = await fetch(
      "/api/offers?address=" + (address || "") + `&pageIndex=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await result.json();
    if (json.message) {
      message.error(json.message);
    } else {
      setOffers(json.offers);
      setTotal(json.total);
    }
  }
  useEffect(() => {
    const loading = message.loading("loading...", 5);
    (async () => {
      const walletInfo = await walletStore.getWalletInfo();
      getOffers(walletInfo.account);
      console.log(walletInfo.account);
      loading;
    })();
  }, []);

  return useObserver(() => (
    <div className={styles.upgrade}>
      <div className={styles.content}>
        <div style={{ padding: "0 60px" }}>
          <Header hasBack={true} hideIndex={true} />
        </div>
        <div className={styles.container}>
          {/*<Form.Item className={styles.search}>
            <Input
              placeholder={t`请输入任意钱包地址`}
              defaultValue={props.offerId}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              onPressEnter={() => {
                getOffers(address);
              }}
            />
            <Button
              type="primary"
              style={{ width: "80px" }}
              onClick={() => {
                getOffers(address);
              }}
            >{t`搜索`}</Button>
            </Form.Item>*/}
          <Table
            columns={columns}
            dataSource={offers}
            bordered={false}
            className={styles.table}
            pagination={false}
          />
          <div
            style={{
              marginTop: "20px",
              textAlign: "right",
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Pagination
              style={{ marginTop: "20px" }}
              defaultCurrent={page}
              current={page}
              showTotal={(total) => `Total ${total} Pair`}
              total={total}
              onChange={(e) => {
                setPage(e);
                getOffers();
              }}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  ));
}
