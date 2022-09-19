import { useObserver } from "mobx-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Banner } from "../common/banner";
import { Header } from "../common/header.com";
import styles from "./../../../pages/home/home.module.less";

export const MainBanner = (props: {}) => {
  const [offerId, setOfferId] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (router.query.id) {
      setOfferId(router.query.id as string);
    }
  }, [router.query.id]);
  return useObserver(() => (
    <>
      {offerId ? (
        <Banner
          onclick={() => {
            router.push(`/offer/${offerId}`);
          }}
        />
      ) : null}
      <div className={styles.bg} id="bg-index"></div>
      <div className={styles.Page1}>
        <div className={styles.background_wrapper}>
          <div className={styles.header_wrapper}>
            <Header hasBack={true} />
          </div>

          <div className={styles.Page_inner}>
            <div
              className={styles.circle_bg}
              style={{ left: 0, top: "-100px" }}
            ></div>
            <h1 className={styles.title}>
              Prove your social status with a permanent soulbound token stored on the chain.
            </h1>
            <h2 className={styles.subInfo}>
              <p className={styles.subInfoMain}>
                Based on ERC-5484 and ERC-721
                <a
                  href="https://github.com/ethereum/EIPs/blob/9f019fffdb5a2075d1ed1cd29312db2a41cd1812/EIPS/eip-5484.md"
                  style={{ marginLeft: "10px" }}
                >
                  (Github)
                </a>
              </p>

              <p>
                <img src="/blue_spark.png" title="heart" className={styles.heart} />
                Create permanent soulbound tokens for your Bois. An non-transferable digital identity of your gang.
              </p>
              <p>
                <img src="/blue_spark.png" title="heart" className={styles.heart} />
                Powered by web3 Multisig technology, no party can fake your token or pretend that you are in their league.
              </p>
              <p>
                <img src="/blue_spark.png" title="heart" className={styles.heart} />
                Burn Authority is set before the mint on the consensus of both parties.
              </p>
              <div className={styles.socials}>
                <a
                  href="https://twitter.com/"
                  className={[styles.social, styles.twitter].join(" ")}
                  target={"_blank"}
                >
                  Twitter
                </a>
                <a
                  href="https://discord.gg/"
                  target={"_blank"}
                  className={[styles.social, styles.discord].join(" ")}
                >
                  Discord
                </a>
                <a
                  href="https://opensea.io/"
                  target={"_blank"}
                  className={[styles.social, styles.discord].join(" ")}
                >
                  OpenSea
                </a>
                <a
                  href="https://github.com/"
                  target={"_blank"}
                  className={[styles.social, styles.github].join(" ")}
                >
                  Github
                </a>
              </div>
            </h2>

            <img src="/card.png" className={styles.flower} title="card" />
          </div>
        </div>
      </div>
    </>
  ));
};
