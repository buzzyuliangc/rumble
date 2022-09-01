import { ethers } from "ethers"
import { RadioChangeEvent, DatePickerProps, Modal, List, Avatar } from 'antd';
import {
    Button,
    DatePicker,
    Space,
    Dropdown,
    Form,
    Input,
    Menu,
    message,
    Radio,
    Tooltip,
    Upload
} from "antd";
import {
    QuestionCircleOutlined,
    LockOutlined,
    DownOutlined,
    LoadingOutlined,
    PlusOutlined,
    LikeOutlined,
    MessageOutlined,
    StarOutlined
} from "@ant-design/icons";
import { useObserver } from "mobx-react";
import wallet from "../../../contracts/wallet";
import styles from "./../../../../pages/home/home.module.less";
import useStore from "../../../stores/useStore";
import { useEffect, useState, createElement } from "react";
import { WalletStore } from "../../../stores/main/wallet.store";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { create as ipfsHttpClient } from 'ipfs-http-client';
import { SolpassStore } from "../../../stores/main/solpass.store";

import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import moment from "moment";
import { useRouter } from "next/router";
import { nfTokenReceiverTestMockSol } from "../../../typechain-types/tests/mocks";


export const Collections = (props: {}) => {

    const solpassStore = useStore(SolpassStore);
    const walletStore = useStore(WalletStore);
    const [offers, setOffers] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    //var data = [];

    async function getOffers(address?: string) {
        setLoading(true);
        const result = await fetch("/api/offer-pending?Aaddress=" + walletStore.walletInfo.account, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await result.json();
        if (json.message) {
            message.error(json.message);
        } else {
            setOffers(json);
            solpassStore.allPendingOffers = json;
            setTotal(solpassStore.allPendingOffers.length);
            if (total > 0) {
                console.log(solpassStore.allPendingOffers[0]);
            }
        }
        setLoading(false);
    }

    function toPass(index?: number) {
        setLoading(true);
        if (solpassStore.pendingOffer && solpassStore.pendingOffer.status != undefined) {
            solpassStore.pendingOffer.status = 0;
        }
        if (total > 0) {
            solpassStore.pendingOffer = offers[index];
            solpassStore.pendingOfferIndex = index;
        }
        setLoading(false);
    }
    useEffect(() => {
        getOffers();
    }, [solpassStore.info.Aaddress]);

    useEffect(() => {
        setOffers(solpassStore.allPendingOffers);
        setTotal(solpassStore.allPendingOffers.length);
        console.log("the total is", total);
        console.log("all pd", solpassStore.allPendingOffers.length)
    }, [solpassStore.pendingOffer.status, solpassStore.allPendingOffers])

    /*useEffect(() => {
        data = Array.from({ length: total }).map((_, i) => ({
            id: i,
            title: `ant design part ${i}`,
            nftName: offers[i].nftName,
            description:
                offers[i].contractAddr,
            content:
                offers[i].Acomment,
            cover:
                offers[i].cover,
        }));
    }, [total])*/


    const data = Array.from({ length: total }).map((_, i) => ({
        id: i,
        title: `ant design part ${i}`,
        nftName: offers[i].nftName,
        description:
            offers[i].contractAddr,
        content:
            offers[i].Acomment,
        cover:
            offers[i].cover,
    }));

    return useObserver(() => (
        <div className="offersList">
            {total > 0 ? (<List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                loading={loading}
                dataSource={[...data]}
                //footer={
                //    <div>
                //        <b>ant design</b> footer part
                //    </div>
                //}
                renderItem={item => (

                    <List.Item
                        key={item.title}
                        onClick={() => toPass(item.id)}
                        extra={
                            <img
                                className="cover-yeh"
                                style={{
                                    background: "#fff",
                                    width: "140px",
                                    height: "200px",
                                    overflow: "hidden",
                                    objectFit: "cover",
                                    objectPosition: "center center",
                                    borderRadius: "6px",
                                }}
                                crossOrigin="anonymous"
                                src={"https://rumble.infura-ipfs.io/ipfs/" + item.cover}
                            />
                        }
                    >

                        <List.Item.Meta
                            title={item.nftName}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>

                )}
            />) : null}
        </div>
    ));
};