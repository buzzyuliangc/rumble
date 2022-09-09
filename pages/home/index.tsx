import { useEffect, useRef } from "react";
import { Footer } from "../../components/main/common/footer.com";
import styles from "./home.module.less";
import useStore from "../../stores/useStore";
import { useObserver } from "mobx-react";
import { web3Config } from "../../stores/config";
import { message, Tooltip } from "antd";
import { WalletStore } from "../../stores/main/wallet.store";
import { MarryStore } from "../../stores/main/marry.store";
import { Trans } from "@lingui/react";

import { QuestionCircleOutlined, LockOutlined } from "@ant-design/icons";
import { NFTStore } from "../../stores/main/nfts.store";
import { loveBubbles } from "../../utils/bubbles";
import { Project } from "../../components/main/home/project.com";
import { RoadMap } from "../../components/main/home/roadmap.com";
import { QA } from "../../components/main/home/qa.com";
import { Team } from "../../components/main/home/team.com";
import { MainBanner } from "../../components/main/home/banner.com";
import { Status0 } from "../../components/main/home/form/status-0";
import { StatusPending } from "../../components/main/home/form/status-pending";
import { FormDesc } from "../../components/main/home/form/desc";
import { FormPage } from "../../components/main/home/form.com";
import { GAS } from "../../components/main/home/gas";
import { SolpassStore } from "../../stores/main/solpass.store";
// import "../../public/mo.umd.js";

export default function Upgrade(props) {
  const wallet = useStore(WalletStore);
  //const nftStore = useStore(NFTStore);

  const solpassStore = useStore(SolpassStore);

  useEffect(() => {
    //nftStore.getNFTS();
    solpassStore.getMintInfo();
    (async () => {
      const walletInfo = await wallet.getWalletInfo();
      solpassStore.info.Aaddress = walletInfo.account;
      solpassStore.info.Aname = walletInfo.ens;
      const loading = message.loading("loading...", 5);
      await solpassStore.getOffer();
      loading;
    })();

    setInterval(solpassStore.getNowGas, 10000);
  }, []);

  return useObserver(() => {
    return (
      <div className={styles.upgrade}>
        <div className={styles.content}>
          <MainBanner />
          <FormPage />
          {/*<GAS />
          <Project />
          <RoadMap />
          <QA />
          <Team />*/}
        </div>
        <Footer />
      </div>
    );
  });
}
