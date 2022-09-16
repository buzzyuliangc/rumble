import { t } from "@lingui/macro";
import { Trans } from "@lingui/react";
import {
  Button,
  Collapse,
  Form,
  Input,
  message,
  Popover,
  Select,
  Tooltip,
  Avatar,
  Divider,
  List,
  Skeleton,
} from "antd";
import { TwitterOutlined } from "@ant-design/icons";
import { useObserver } from "mobx-react";
import wallet from "../../../../contracts/wallet";
import styles from "./../../../../pages/home/home.module.less";
import useStore from "../../../../stores/useStore";
import { MarryStore } from "../../../../stores/main/marry.store";
import { SolpassStore } from "../../../../stores/main/solpass.store";
import { NFTStore } from "../../../../stores/main/nfts.store";
import { useEffect, useRef, useState } from "react";
import ClipboardJS from "clipboard";
import { NFT } from "../../common/nft";
import { imageLoaded } from "../../../../utils/imageloaded";
import { WalletStore } from "../../../../stores/main/wallet.store";
import { v4 as uuidv4 } from "uuid";
import { utils } from "ethers";
import QRCode from "qrcode";
import InfiniteScroll from 'react-infinite-scroll-component';
import moment from 'moment';
import { web3Config } from "../../../../stores/config";

interface DataType {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export const StatusPending = (props: {}) => {
  const formItemLayout = {
    wrapperCol: { span: 24 },
  };
  const solpassStore = useStore(SolpassStore);
  const walletStore = useStore(WalletStore);
  const [minting, setMinting] = useState(false);
  const [nftActiveIndex, setNftActiveIndex] = useState(solpassStore.pendingOfferIndex ? solpassStore.pendingOfferIndex : 0);
  console.log("all offers", solpassStore.allPendingOffers);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);

  const svgref = useRef(null);
  const svgref2 = useRef(null);
  const copyRef = useRef(null);
  const inputRef = useRef(null);

  const createImage = async (svgRef: any, tokenId?: string) => {
    console.log(svgRef.current.getElementsByTagName("div")[0]);
    const image1 = svgRef.current.getElementsByClassName("cover")[0];
    const logo = svgRef.current.getElementsByClassName("logo")[0];

    const imageCompUp = new Image();
    imageCompUp.src = "/up.png";
    imageCompUp.width = 250;
    imageCompUp.height = 250;

    const imageCompDown = new Image();
    imageCompDown.src = "/down.png";
    imageCompDown.width = 250;
    imageCompDown.height = 250;

    const upcanvas = document.createElement("canvas");
    upcanvas.width = 250;
    upcanvas.height = 250;

    const downcanvas = document.createElement("canvas");
    downcanvas.width = 250;
    downcanvas.height = 250;

    const image1_r: any = await imageLoaded(image1);
    const imageCompUp_r: any = await imageLoaded(imageCompUp);
    upcanvas.getContext("2d").drawImage(image1_r, 0, 0, 250, 250);
    upcanvas.getContext("2d").globalCompositeOperation = "destination-in";
    upcanvas.getContext("2d").drawImage(imageCompUp_r, 0, 0, 250, 250);

    /*const image2_r: any = await imageLoaded(image2);
    const imageCompDown_r: any = await imageLoaded(imageCompDown);
    downcanvas.getContext("2d").drawImage(image2_r, 0, 0, 250, 250);
    downcanvas.getContext("2d").globalCompositeOperation = "destination-in";
    downcanvas.getContext("2d").drawImage(imageCompDown_r, 0, 0, 250, 250);*/

    const svg = svgRef.current.getElementsByTagName("svg")[0];
    if (!svg) return;
    const size = 1080;
    const html = svg.outerHTML;

    let canvas = document.createElement("canvas");

    canvas.width = size;

    canvas.height = size;
    let context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, size, size);

    const image = new Image();
    image.width = 1080;
    image.height = 1080;
    image.src = solpassStore.pendingOffer?.bgIndex
      ? `/bg/${solpassStore.pendingOffer.bgIndex}.png`
      : `/bg/1.png`;

    const image_r: any = await imageLoaded(image);

    context.drawImage(image_r, 0, 0, size, size);
    const svgImage = new Image();
    svgImage.src = `data:image/svg+xml;base64,${btoa(
      unescape(encodeURIComponent(html))
    )}`;
    const svgImage_r: any = await imageLoaded(svgImage);
    // draw image in canvas starting left-0 , top - 0
    context.drawImage(svgImage_r, 0, 0, size, size);
    context.drawImage(upcanvas, 90, 90, 250, 250);
    context.drawImage(downcanvas, 90, 340, 250, 250);
    if (tokenId) {
      let canvasQR = document.createElement("canvas");

      canvasQR.width = 70;

      canvasQR.height = 70;
      let contextQR = canvasQR.getContext("2d");
      contextQR.fillStyle = "white";
      contextQR.fillRect(0, 0, 70, 70);
      const gen = () => {
        return new Promise((resolve) => {
          QRCode.toCanvas(
            canvasQR,
            window.location.origin + "/i/" + tokenId,
            {
              margin: 2,
              width: 70,
              color: {
                dark: "#333", // Blue dots
                light: "#fff", // Transparent background
              },
            },
            function (error) {
              if (error) console.error(error);
              resolve(null);
            }
          );
        });
      };
      await gen();
      context.drawImage(canvasQR, 30, size - 120, 70, 70);
    }
    const png = canvas.toDataURL(); // default png
    // var a = document.createElement("a");
    // a.href = png;
    // a.download = "output.png";
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);
    return png;
    // document.body.appendChild(bgImage);
  };
  const [downloading, setDownloading] = useState(false);
  const download = async () => {
    let dataUrl, dataUrl2;
    setDownloading(true);
    try {
      dataUrl = await createImage(svgref, solpassStore.pendingOffer.tokenId);
      dataUrl2 = await createImage(svgref2, solpassStore.pendingOffer.tokenId);
      var a = document.createElement("a");
      a.href = dataUrl;
      a.download = `Marry3 Certificate #${solpassStore.pendingOffer.tokenId}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      var a = document.createElement("a");
      a.href = dataUrl2;
      a.download = `Marry3 Certificate #${solpassStore.pendingOffer.tokenId}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (e) {
      message.error(
        "Create NFT cover error, make sure all pictures are loaded correct, if not, revoke and select another nft pfp "
      );
    }
    setDownloading(false);
  };
  const mint = async (address: string, uri: string, expDate: Date, signature: string, id: String) => {

    try {
      setMinting(true);

      console.log("expires", expDate);
      let formattedDate = (moment(expDate)).format('DD-MMM-YYYY');
      console.log("formatted", formattedDate);
      const loading = message.loading("processing, please don't leave the page...the blockchain might take a few minutes to finalize changes", 0);
      try {
        const blockNo = await solpassStore.mint(address, uri, formattedDate, signature, id);

        loading();
        setMinting(false);
        await solpassStore.getOffer();
      } catch (e) {
        console.error(e);
        loading();
        message.error("mint error");
      }
    } catch (e) {
      console.error(e);
      message.error(
        "Create NFT cover error, make sure all pictures are loaded correct, if not, revoke and select another nft pfp"
      );
    }
  };

  let clip: any;
  useEffect(() => {
    if (copyRef.current && inputRef.current) {
      if (!clip) {
        clip = new ClipboardJS(copyRef.current!, {
          target: () => inputRef.current!,
        });
        clip.on("success", function () {
          message.success("copy success");
          solpassStore.shareClicked = true;
        });
        clip.on("error", () => {
          message.error("copy failed");
        });
      }
    }
  }, [copyRef.current]);

  useEffect(() => {
    setNftActiveIndex(solpassStore.pendingOfferIndex);
    if (solpassStore.allPendingOffers[nftActiveIndex]) {
      solpassStore.pendingOffer = solpassStore.allPendingOffers[solpassStore.pendingOfferIndex];
    }
  }, [solpassStore.pendingOfferIndex])

  useEffect(() => {
    solpassStore.getTokens();
  }, []);
  return useObserver(() => (
    <Form {...formItemLayout} layout={"vertical"} className={styles.mainForm}>
      {solpassStore.pendingOffer.status == 1 ? (
        <div
          id="scrollableDiv"
          style={{
            height: 400,
            overflow: 'auto',
            padding: '0 16px',
            border: '1px solid rgba(140, 140, 140, 0.35)',
          }}
        >
          <InfiniteScroll
            dataLength={solpassStore.pendingOffer.totalSigned}
            next={() => { }}
            hasMore={false}
            loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget="scrollableDiv"
          >
            <List
              dataSource={solpassStore.pendingOfferTokens}
              renderItem={item => (
                <List.Item key={item.id}>
                  <List.Item.Meta
                    //avatar={<Avatar src={item.picture.large} />}
                    title={<a
                      href={`${web3Config.scan}${item.Raddress}`}
                    >{item.Bname}</a>}
                    description={item.Raddress}
                  />
                  <Button
                    onClick={async () => {
                      setMinting(true);
                      try {
                        await mint(item.Raddress, solpassStore.pendingOffer.metaIPFS, solpassStore.pendingOffer.expirationDate, item.Bsignature, item.id);
                      } catch (e) {
                        console.error(e);
                      }

                      setMinting(false);
                    }}
                    type="primary"
                    style={{
                      height: "25px",
                      width: "20%",
                      padding: "1px",
                      position: "relative",
                      right: "2px",
                      top: "-13px",
                    }}
                    className="shake-little"
                    loading={minting}
                    disabled={item.minted == 1}
                  >
                    {item.minted == 1 ? (<div>Minted</div>) : (<Trans id="Mint " />)}
                  </Button>
                </List.Item>
              )}
            />
          </InfiniteScroll>
        </div>
      ) : (
        <div className={styles.nfts}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            ref={svgref}
            className={[
              styles.nft,
              nftActiveIndex == 0 ? styles.nft_active : "",
            ].join(" ")}
          >
            <NFT offers={solpassStore.allPendingOffers} width={340} index={nftActiveIndex} />
          </div>
        </div>

      )}

      {solpassStore.pendingOffer.status == 0 ? (
        <Button
          type="primary"
          style={{ width: "100%" }}
          onClick={() => { solpassStore.pendingOffer.status = 1 }}
        >
          {solpassStore.pendingOffer.totalSigned} total receivers: {solpassStore.pendingOffer.totalSigned - solpassStore.pendingOffer.totalMinted} waiting to be minted
        </Button>
      ) : solpassStore.pendingOffer.status == 2 ? (
        <>
          <Button
            style={{ width: "calc(100% - 70px)" }}
            onClick={download}
            loading={downloading}
            disabled={true}
          >
            <Trans id=" Minted! " />
          </Button>
          <a
            style={{
              width: "40px",
              marginLeft: "10px",
              background: "#fff",
              display: "inline-block",
              height: "40px",
              verticalAlign: "-2px",
              textAlign: "center",
              borderRadius: "50%",
              lineHeight: "40px",
              border: "2px solid #eee",
            }}
            href={
              "https://twitter.com/intent/tweet?text=" +
              encodeURIComponent(
                "I just minted a Solpass @Rumble #Rumble #Solpass"
              )
            }
            target={"_blank"}
          >
            <TwitterOutlined
              style={{ fontSize: "18px", color: "#0057D6", width: "40px", height: "40px" }}
            />
          </a>
        </>
      ) : (
        <>
          {/* <Button
            onClick={async () => {
              setMinting(true);
              try {

              } catch (e) {
                console.error(e);
              }

              setMinting(false);
            }}
            type="primary"
            style={{ width: "78%" }}
            className="shake-little"
            loading={minting}
          >
            <Trans id="Mint " />(
            {solpassStore.mintPrice &&
              Number(utils.formatEther(solpassStore.mintPrice)) == 0
              ? "Free"
              : solpassStore.mintPriceFormated + " Ξ"}
            )
          </Button>
          <Button
            onClick={async () => {
              const loading = message.loading(
                "please wait until success...",
                0
              );
              try {
                await solpassStore.revoke();
                window.location.reload();
              } catch (e) {
                console.error(e);
              }
              loading();
            }}
            style={{ width: "20%", marginLeft: "2%" }}
            className="shake-little"
          >
            Revoke
          </Button>
          */}
        </>
      )}

      {solpassStore.pendingOffer.status == 0 ? (
        <Input.Group
          compact
          style={{
            display: "inline-block",
            verticalAlign: "8px",
            marginTop: "20px",
          }}
        >
          <input
            value={
              window.location.origin + `/offer/${solpassStore.pendingOffer.id}`
            }
            style={{
              width: "calc(100% - 160px)",
              color: "#999CA0",
              fontWeight: "300",
              border: "2px solid #EBEBEB ",
              paddingLeft: "10px",
            }}
            id="copy-input"
            ref={inputRef}
          />
          <Button
            style={{ width: "110px" }}
            id="copy"
            data-clipboard-target="#copy-input"
            ref={copyRef}
          >
            Copy Link
          </Button>
          <a
            style={{
              width: "40px",
              marginLeft: "10px",
              background: "#fff",
              display: "inline-block",
              height: "40px",
              verticalAlign: "-2px",
              textAlign: "center",
              borderRadius: "50%",
              lineHeight: "40px",
              border: "2px solid #eee",
            }}
            href={
              "https://twitter.com/intent/tweet?text=" +
              encodeURIComponent(
                "I just created a Solpass collection, click link to mint a pass" +
                window.location.origin +
                `/offer/${solpassStore.pendingOffer.id}` +
                " @rumble #rumble"
              )
            }
            target={"_blank"}
          >
            <TwitterOutlined
              style={{ fontSize: "18px", color: "#0057D6", width: "40px", height: "40px" }}
            />
            {/*<Popover
              placement="right"
              content={
                <div style={{ width: "180px" }}>
                  share to twitter
                  <br /> invite friends to mint
                </div>
              }
              visible={true}
            >
              <TwitterOutlined
                style={{ fontSize: "18px", color: "#0057D6", width: "40px", height: "40px" }}
              />
            </Popover>*/}
          </a>
        </Input.Group>
      ) : null}
    </Form>
  ));
};
