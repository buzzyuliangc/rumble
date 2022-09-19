import { ethers } from "ethers"
import { RadioChangeEvent, DatePickerProps, Modal } from 'antd';
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
  PlusOutlined
} from "@ant-design/icons";
import { useObserver } from "mobx-react";
import wallet from "../../../../contracts/wallet";
import styles from "./../../../../pages/home/home.module.less";
import useStore from "../../../../stores/useStore";
import { useEffect, useState } from "react";
import { messages } from "../../../../locale/en";
import { WalletStore } from "../../../../stores/main/wallet.store";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { create as ipfsHttpClient } from 'ipfs-http-client';
import { SolpassStore } from "../../../../stores/main/solpass.store";

import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import moment from "moment";
import { kMaxLength } from "buffer";

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });

export const Status0 = (props: {}) => {

  const formItemLayout = {
    wrapperCol: { span: 24 },
  };
  const solpassStore = useStore(SolpassStore);
  const walletStore = useStore(WalletStore);
  const [submiting, setSubmiting] = useState(false);
  const projectId = '2DdOfhpepWwdoHOxnzi9eMjTJ36';
  const projectSecret = '89a6f73c724ef744a90bb9ffc3a43e6a';
  const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

  const client = ipfsHttpClient({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    apiPath: '/api/v0',
    headers: {
      authorization: auth
    }
  });

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  //radio value controller
  const [burnAuthValue, setBurnAuthValue] = useState(0);
  const [expHidden, setExpHidden] = useState(1);
  const [expDate, setExpDate] = useState<Date>(null);
  const [uploadCheck, setUploadCheck] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const expRadioOnChange = (e: RadioChangeEvent) => {
    if (e.target.value === 1) {
      solpassStore.info.expirationDate = null;
    }
    else {
      solpassStore.info.expirationDate = expDate;
    }
    console.log('radio sol', solpassStore.info.expirationDate);
    setExpHidden(e.target.value);
  };

  const dateOnChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
    let realDate = null;
    if (date !== null) {
      realDate = date.toDate();
      setExpDate(realDate);
    }
    solpassStore.info.expirationDate = realDate;
    console.log('realDate', realDate);
    console.log('sol expiration', solpassStore.info.expirationDate);
  };

  const burnAuthRadioOnChange = (e: RadioChangeEvent) => {
    solpassStore.info.burnAuth = e.target.value;
    setBurnAuthValue(e.target.value);
    console.log('burn sol', solpassStore.info.burnAuth);
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
      setUploadCheck(false);
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
      setUploadCheck(false);
      return false;
    }
    setUploadCheck(true);
    return false;
  };

  const uploadToIPFS = async (event) => {
    if (uploadCheck === false) {
      console.log('invalid file');
      return;
    }
    console.log('Upload initiated')
    const file = event.file
    if (typeof file !== 'undefined') {
      try {
        const result = await client.add(file);
        console.log(result);
        solpassStore.info.cover = result.path;
        setImageUrl(`https://rumble.infura-ipfs.io/ipfs/${result.path}`);
        //const coverArw = await fetch(
        //  `https://ipfs2arweave.com/permapin/${result.path}`,
        //  { method: 'POST' });
        //const response = await coverArw.json();
        //console.log("arweave response", response);
      } catch (error) {
        console.log("ipfs image upload error: ", error)
      }
    }
  }

  const begin = async (e) => {
    e.preventDefault();
    setSubmiting(true);
    try {
      await solpassStore.signA();
    } catch (e) {
      message.error(e.message);
    }

    setSubmiting(false);
  };
  const [ensList, setEnsList] = useState<ItemType[]>([]);
  useEffect(() => {
    (async () => {
      const walletInfo = await walletStore.getWalletInfo();
      const ens = walletInfo.ens;
      const bit = walletInfo.bit;
      const items = [];
      if (ens) {
        items.push({
          label: ens,
          key: ens,
        });
      }
      if (bit) {
        items.push({
          label: bit,
          key: bit,
        });
      }
      setEnsList(items);
    })();
  }, []);

  const menu = (
    <Menu
      onClick={(e) => {
        solpassStore.info.Aname = e.key;
      }}
      items={[
        {
          disabled: true,
          label:
            ensList.length > 0
              ? "please choose .eth or .bit"
              : "no .eth or .bit bind",
          key: -1,
        },
        ...ensList,
      ]}
    />
  );

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleCancel = () => setPreviewVisible(false);

  const handleRemove = () => {
    setImageUrl("");
    solpassStore.info.cover = null;
  };

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewVisible(true);
  };
  return useObserver(() => (
    <Form {...formItemLayout} layout={"vertical"} className={styles.mainForm}>
      <Form.Item
        label={
          <span>
            Solpass Cover
            <Tooltip
              title="Upload a cover for your Solpass"
            >
              <QuestionCircleOutlined style={{ marginLeft: "5px" }} />
            </Tooltip>
          </span>
        }
      >
        <Upload
          name="cover"
          listType="picture-card"
          className="cover-uploader"
          showUploadList={true}
          beforeUpload={beforeUpload}
          onChange={uploadToIPFS}
          onPreview={handlePreview}
          onRemove={handleRemove}
        >
          {imageUrl ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={imageUrl} />
        </Modal>

      </Form.Item>
      <Form.Item label='Your Name'>
        <Input.Group
          compact
          style={{
            width: "100%",
          }}
        >
          <Input
            value={solpassStore.info.Aname}
            maxLength={5}
            placeholder="will get your .eth/.bit name auto"
            onChange={async (e) => {
              solpassStore.info.Aname = e.target.value;
            }}
            style={{ width: "calc(100% - 120px)" }}
          />
          <Dropdown overlay={menu}>
            <Button style={{ width: "40px" }}>
              <DownOutlined />
            </Button>
          </Dropdown>
        </Input.Group>
      </Form.Item>

      <Form.Item label='Solpass Name'>
        <Input
          placeholder='Name your pass'
          value={solpassStore.info.nftName}
          style={{ width: "calc(100% - 120px)" }}
          maxLength={9}
          onChange={(e) => {
            solpassStore.info.nftName = e.target.value;
          }}
        />
      </Form.Item>
      <Form.Item label='Description'>
        <Input.TextArea
          placeholder='This pass is used for...'
          rows={5}
          value={solpassStore.info.Acomment}
          maxLength={30}
          showCount={true}
          onChange={(e) => {
            solpassStore.info.Acomment = e.target.value;
          }}
        />
      </Form.Item>
      <Form.Item label='Expiration Date'>
        <Radio.Group onChange={expRadioOnChange} value={expHidden} >
          <Radio value={0}>
            <DatePicker onChange={dateOnChange} disabledDate={(current) => {
              return moment().add(-1, 'days') >= current;
            }} disabled={expHidden === 1} />
          </Radio>
          <Radio value={1}>Never Expires</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label={
          <span>
            Select Who Can Burn The Pass
            <Tooltip
              title="The selected burn authorization will be shown to pass receiver before they sign on it."
            >
              <QuestionCircleOutlined style={{ marginLeft: "5px" }} />
            </Tooltip>
          </span>
        }>
        <Radio.Group onChange={burnAuthRadioOnChange} value={burnAuthValue}>
          <Radio value={0}>Issuer Only</Radio>
          <Radio value={1}>Receiver Only</Radio>
          <Radio value={2}>Both Parties</Radio>
          <Radio value={3}>Neither Parties</Radio>
        </Radio.Group>
      </Form.Item>

      {solpassStore.info.Aaddress ? (
        <Button
          onClick={begin}
          disabled={!solpassStore.info.Aaddress}
          type="primary"
          loading={submiting}
          style={{ width: "100%" }}
          className="shake-little"
        >
          <LockOutlined style={{ marginRight: "10px" }} />
          sign and deploy Solpass to get invite link
        </Button>
      ) : (
        <Button
          onClick={() => {
            wallet.connect();
          }}
          type="primary"
          loading={submiting}
          style={{ width: "100%" }}
        >
          Connect Wallet
        </Button>
      )}
    </Form>
  ));
};