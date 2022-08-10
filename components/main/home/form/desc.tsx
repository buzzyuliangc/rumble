import { t } from "@lingui/macro";
import { Trans } from "@lingui/react";
import { Collapse, Tooltip } from "antd";
import { useObserver } from "mobx-react";
import { QuestionCircleOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./../../../../pages/home/home.module.less";
import useStore from "../../../../stores/useStore";
import { web3Config } from "../../../../stores/config";
import { SolpassStore } from "../../../../stores/main/solpass.store";

export const FormDesc = (props: {}) => {
  const solpassStore = useStore(SolpassStore);
  return useObserver(() => (
    <>
      {solpassStore.pendingOffer?.status == 2 &&
        solpassStore.pendingOffer.tokenId ? (
        <>
          <div className={styles.price_desc}>
            <Trans id="查看 Marry3 Certificate 详情" />:
            <a
              href={`/i/${solpassStore.pendingOffer.tokenId}`}
              target={"_blank"}
              style={{ fontWeight: "500", marginLeft: "30px" }}
            >
              Token #{solpassStore.pendingOffer.tokenId}
            </a>
            <a
              href={`${web3Config.opensea}${web3Config.address.solpass}/${solpassStore.pendingOffer.tokenId}`}
              target={"_blank"}
              style={{ fontWeight: "500", marginLeft: "10px" }}
            >
              <img
                src="/opensea-logo.png"
                style={{
                  width: "15px",
                  height: "15px",
                  verticalAlign: "-3px",
                }}
              />
            </a>
            <a
              href={`/i/${solpassStore.pendingOffer.tokenId}`}
              target={"_blank"}
              style={{ fontWeight: "500", marginLeft: "30px" }}
            >
              Token #{solpassStore.pendingOffer.tokenId}
            </a>
            <a
              href={`${web3Config.opensea}${solpassStore.pendingOffer.contractAddr}/${solpassStore.pendingOffer.tokenId}`}
              target={"_blank"}
              style={{ fontWeight: "500", marginLeft: "10px" }}
            >
              <img
                src="/opensea-logo.png"
                style={{
                  width: "15px",
                  height: "15px",
                  verticalAlign: "-3px",
                }}
              />
            </a>
          </div>
          <div className={styles.join_holder}>
            Join the Rumble Discord:{" "}
            <a href="https://discord.gg/" target={"_blank"}>
              https://discord.gg/
            </a>
          </div>
        </>
      ) : (
        <div className={styles.price_desc}>

        </div>
      )}
    </>
  ));
};
