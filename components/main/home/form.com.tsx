import { t } from "@lingui/macro";
import { Trans } from "@lingui/react";
import { Collapse, message, Steps, StepsProps } from "antd";
import { useObserver } from "mobx-react";
import { QuestionCircleOutlined, LockOutlined } from "@ant-design/icons";
import { web3Config } from "../../../stores/config";
import { WalletStore } from "../../../stores/main/wallet.store";
import useStore from "../../../stores/useStore";
import styles from "./../../../pages/home/home.module.less";
import { FormDesc } from "./form/desc";
import { Collections } from "./collections.com"
import { Status0 } from "./form/status-0";
import { StatusPending } from "./form/status-pending";
import { useEffect, useRef, useState } from "react";
import { loveBubbles } from "../../../utils/bubbles";
import { SolpassStore } from "../../../stores/main/solpass.store";

export const FormPage = (props: {}) => {
  const solpassStore = useStore(SolpassStore);
  const walletStore = useStore(WalletStore);
  const circleDom = useRef<HTMLDivElement>(null);
  let hasLoadedBubbles = false;
  const loadBubbles = async () => {
    //@ts-ignore
    if (window.mojs) {
      loveBubbles(circleDom.current);
      return;
    }
    const script = document.createElement("script");
    script.src = "/mo.umd.js";
    document.body.appendChild(script);
    script.onload = () => {
      loveBubbles(circleDom.current);
    };
    hasLoadedBubbles = true;
  };

  return useObserver(() => (
    <div className={styles.Page2}>
      <div className={styles.Page_inner}>
        {!solpassStore.info.Aaddress ? (
          <div className={styles.noconnectWrapper}>
            <div
              className={styles.noconnect}
              onClick={() => {
                walletStore.connect();
              }}
            >
              <LockOutlined style={{ fontSize: "25px" }} /> <br />
              Connect Wallet to Activate Rumble
            </div>
          </div>
        ) : null}
        <div className={styles.left}>
          <div className={styles.mainFormWrapper}>
            <div className={styles.mainFormBG}></div>
            <Collections />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.mainFormWrapper}>
            <div className={styles.mainFormBG}></div>
            {solpassStore.pendingOffer.status === 0 ||
              solpassStore.pendingOffer.status === 1 ||
              solpassStore.pendingOffer.status === 2 ? (
              <StatusPending />
            ) : (
              <Status0 />
            )}
            <Steps
              current={solpassStore.stepStatus()}
              progressDot={customDot}
              className={styles.steps}
              responsive={false}
            >
              <Steps.Step title='Sign & Deploy Solpass' />
              <Steps.Step title='Share Link to member' />
              <Steps.Step title='Receiver Signature' />
              <Steps.Step title='Mint SBTs' />
            </Steps>
            <FormDesc />
          </div>
        </div>
      </div>
    </div>
  ));
};
const customDot: StepsProps["progressDot"] = (dot, { status, index }) => {
  return status == "wait" ? (
    <img
      src="/form/0.png"
      className={[styles.dotimg, styles.dotimg0].join(" ")}
    />
  ) : status == "process" ? (
    <img
      src="/form/1.png"
      className={[styles.dotimg, styles.dotimg1].join(" ")}
    />
  ) : status == "finish" ? (
    <img
      src="/form/2.png"
      className={[styles.dotimg, styles.dotimg2].join(" ")}
    />
  ) : null;
};
