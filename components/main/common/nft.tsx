import html2canvas from "html2canvas";
import { useObserver } from "mobx-react";
import moment from "moment";
import React, { useEffect, useRef } from "react";
//import { Offers } from "../../../stores/main/marry.store";
import { Offers } from "../../../stores/main/solpass.store";
import styles from "./footer.module.less";
import { Image, Upload, Typography } from 'antd';
import { HeartFilled, PicCenterOutlined } from "@ant-design/icons";
import { content } from "html2canvas/dist/types/css/property-descriptors/content";
import { web3Config } from "../../../stores/config";

const { Title, Paragraph, Text, Link } = Typography;

export const NFT = (props: {
  offers?: Offers[];
  width?: number;
  index?: number;
}) => {
  const svgref = useRef(null);

  const bgImage = props.offers?.at(props.index).bgIndex
    ? `url(${window.location.origin}/bg/${props.offers?.at(props.index).bgIndex}.png)`
    : `url(${window.location.origin}/bg/1.png)`;

  const coverA = props.offers?.at(props.index).cover
    ? `https://rumble.infura-ipfs.io/ipfs/${props.offers?.at(props.index).cover}` // `/api/proxy?url=${encodeURIComponent(props.offer?.Acover)}`
    : "/heart-cover.png";

  useEffect(() => {
    const css = document.createElement("style");
    css.innerHTML = `
    :root{
    --bg: ${bgImage}
    }
  `;
    document.body.appendChild(css);
  }, []);

  return useObserver(() => (
    <div
      style={{
        backgroundImage: bgImage,
        backgroundSize: "100% 100%",
        backgroundColor: "#ffffff",
        position: "relative",
        width: props.width + "px",
        height: props.width + "px",
      }}
    >

      <div
        className="cover-whatever"
        style={{
          background: "#fff",
          width: (500 * 100) / 1080 + "%",
          height: (500 * 100) / 1080 + "%",
          left: (90 * 100) / 1080 + "%",
          top: (90 * 100) / 1080 + "%",
          position: "absolute",
          zIndex: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "6px",
          border: "10px dashed 4px #ff0000",
          overflow: "hidden",
        }}
      >
        <img
          className="cover-yeh"
          style={{
            background: "#fff",
            width: "100%",
          }}
          crossOrigin="anonymous"
          src={coverA}
        />
      </div>

      <div
        className="textparagrah"
        style={{
          width: "30%",
          height: "70%",
          left: "60%",
          top: "15%",
          position: "absolute",
          zIndex: 20,
        }}
      >
        <div>
          <h1
            className="sc-1xf18x6-0 jjFMnV item--title"
            title="Spaceface"
            style={{
              fontSize: "19px",
              fontWeight: "600",
              maxWidth: "100%",
              margin: "0px",
              width: "588px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "normal",
              whiteSpace: 'nowrap',
            }}>
            {props.offers?.at(props.index).nftName}
          </h1>
        </div>

        <div
          className="sc-1xf18x6-0 sc-4gdciy-1 haVRLx gmetdQ AccountLink--ellipsis-overflow"
          style={{
            display: "inline-flex",
            alignItems: "center",
            height: "24px",
            width: "100%",
            fontSize: "10px",
          }}>
          Issued by&nbsp;
          <a
            className="sc-1pie21o-0 hmVtez sc-1xf18x6-0 jQBTGb AccountLink--ellipsis-overflow"
            font-weight="inherit"
            href={`${web3Config.scan}${props.offers?.at(props.index).Aaddress}`}
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}>
            <span>{props.offers?.at(props.index).Aname}</span>
          </a>
        </div>

        <div style={{
          width: "100%",
        }}>
          <p style={{
            fontSize: "10px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            width: "100%",
          }}>
            Description: {props.offers?.at(props.index).Acomment}
          </p>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="1080"
        height="1080"
        viewBox="0 0 1080 1080"
        fill="none"
        style={{
          width: props.width ? `${props.width}px` : "",
          height: props.width ? `${props.width}px` : "",
          position: "relative",
          zIndex: "10",
        }}
      >
        <defs>
          <rect id="path_0" x="0" y="0" width="1080" height="1080" />
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              transform="translate(0 0) scale(0.000625 0.000625) rotate(0)"
              xlinkHref="#image0"
            />
          </pattern>

          <linearGradient
            id="linear_0"
            x1="94.01960915436382%"
            y1="8.222227269432537%"
            x2="100%"
            y2="1000%"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#ffd2d2" stopOpacity="0.66" />
            <stop offset="1" stopColor="#ffd2d2" stopOpacity="0.32" />
          </linearGradient>
          <filter
            id="filter_13"
            x="-120"
            y="-120"
            width="1260"
            height="1140"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur
              in="BackgroundImage"
              stdDeviation="60"
              edgeMode="duplicate"
            />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur"
              result="shape"
            />
          </filter>
          <filter
            id="filter_44"
            x="409"
            y="171"
            width="596"
            height="108"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="0.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.8470588235294118 0 0 0 0 0.8470588235294118 0 0 0 0 0.8470588235294118 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_Shadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_Shadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter_48"
            x="409"
            y="426"
            width="584"
            height="108"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="0.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.8470588235294118 0 0 0 0 0.8470588235294118 0 0 0 0 0.8470588235294118 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_Shadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_Shadow"
              result="shape"
            />
          </filter>
          <pattern
            id="pattern1"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
            fill="#fff"
          >
            <use
              transform="translate(0 0) scale(0.0016666666666666668 0.0016666666666666668) rotate(0)"
              xlinkHref="#image1"
            />
          </pattern>
          {/* <image
            id="image1"
            width="600"
            height="600"
            fill="#fff"
            style={{ background: "#fff" }}
            xlinkHref={
              props.offer?.Bcover
                ? `/api/proxy?url=${encodeURIComponent(props.offer?.Bcover)}`
                : "/bg/blank.png"
            }
          /> */}
          <pattern
            id="pattern2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              transform="translate(0 0) scale(0.0016666666666666668 0.0016666666666666668) rotate(0)"
              xlinkHref="#image2"
            />
          </pattern>
        </defs>
        <g opacity="1" transform="translate(0 0)  rotate(0 540 540)">
          {/* <rect
          fill="#FFFFFF"
          opacity="1"
          transform="translate(0 0)  rotate(0 540 540)"
          x="0"
          y="0"
          width="1080"
          height="1080"
          rx="0"
        /> */}
          <mask id="bg-mask-0" fill="white">
            <use xlinkHref="#path_0"></use>
          </mask>
          <g mask="url(#bg-mask-0)">
            <path
              id="Rectangle"
              fillRule="evenodd"
              style={{ fill: "url(#pattern0)" }}
              transform="translate(0 0)  rotate(-360 540 540)"
              opacity="1"
              d="M0,0L0,1080L1080,1080L1080,0L0,0Z "
            />

            <g opacity="1" transform="translate(0 0)  rotate(0 540 480)">

              <g opacity="1" transform="translate(100 755)  rotate(0 138.5 56)">
                <g opacity="1" transform="translate(0 0)  rotate(0 138.5 16)">
                  <g opacity="1" transform="translate(0 0)  rotate(0 61.5 16)">
                    <text>
                      <tspan
                        x="0"
                        y="24"
                        fontSize="24"
                        line-height="0"
                        fill="#361041"
                        opacity="1"
                        letterSpacing="0"
                      >
                        Blockchain
                      </tspan>
                    </text>
                  </g>
                  <g opacity="1" transform="translate(138 0)  rotate(0 6 14.5)">
                    <text>
                      <tspan
                        x="0"
                        y="23"
                        fontSize="24"
                        line-height="0"
                        fill="#EDEDED"
                        opacity="1"
                        fontFamily="Inter-SemiBold"
                        letterSpacing="0"
                      >
                        •
                      </tspan>
                    </text>
                  </g>
                  <g opacity="1" transform="translate(165 0)  rotate(0 56 16)">
                    <text>
                      <tspan
                        x="0"
                        y="24"
                        fontSize="24"
                        line-height="0"
                        fill="#361041"
                        opacity="1"
                        letterSpacing="0"
                      >
                        Ethereum
                      </tspan>
                    </text>
                  </g>
                </g>
                <g opacity="1" transform="translate(0 40)  rotate(0 115.5 16)">
                  <g opacity="1" transform="translate(0 0)  rotate(0 115.5 16)">
                    <g opacity="1" transform="translate(0 0)  rotate(0 38 16)">
                      <text>
                        <tspan
                          x="0"
                          y="24"
                          fontSize="24"
                          line-height="0"
                          fill="#361041"
                          opacity="1"
                          letterSpacing="0"
                        >
                          BurnAuth
                        </tspan>
                      </text>
                    </g>
                    <g
                      opacity="1"
                      transform="translate(138 0)  rotate(0 6 14.5)"
                    >
                      <text>
                        <tspan
                          x="0"
                          y="23"
                          fontSize="24"
                          line-height="0"
                          fill="#EDEDED"
                          opacity="1"
                          fontFamily="Inter-SemiBold"
                          letterSpacing="0"
                        >
                          •
                        </tspan>
                      </text>
                    </g>
                    <g
                      opacity="1"
                      transform="translate(164 0)  rotate(0 56.5 16)"
                    >
                      <text>
                        <tspan
                          x="0"
                          y="24"
                          fontSize="24"
                          line-height="0"
                          fill="#361041"
                          opacity="1"
                          letterSpacing="0"
                        >
                          {props.offers?.at(props.index).burnAuth}
                        </tspan>
                      </text>
                    </g>
                  </g>
                </g>
                <g opacity="1" transform="translate(0 80)  rotate(0 113 16)">
                  <g opacity="1" transform="translate(0 0)  rotate(0 113 16)">
                    <g opacity="1" transform="translate(0 0)  rotate(0 47 16)">
                      <text>
                        <tspan
                          x="0"
                          y="24"
                          fontSize="24"
                          line-height="0"
                          fill="#361041"
                          opacity="1"
                          letterSpacing="0"
                        >
                          Expiration
                        </tspan>
                      </text>
                    </g>
                    <g
                      opacity="1"
                      transform="translate(138 0)  rotate(0 6 14.5)"
                    >
                      <text>
                        <tspan
                          x="0"
                          y="23"
                          fontSize="24"
                          line-height="0"
                          fill="#EDEDED"
                          opacity="1"
                          fontFamily="Inter-SemiBold"
                          letterSpacing="0"
                        >
                          •
                        </tspan>
                      </text>
                    </g>
                    <g
                      opacity="1"
                      transform="translate(164 0)  rotate(0 45 16)"
                    >
                      <text>
                        <tspan
                          x="0"
                          y="24"
                          fontSize="24"
                          line-height="0"
                          fill="#361041"
                          opacity="1"
                          letterSpacing="0"
                        >
                          {props.offers?.at(props.index).expirationDate
                            ? moment(props.offers?.at(props.index).expirationDate).format("YYYY-MM-DD")
                            : "  --  "}
                        </tspan>
                      </text>
                    </g>
                  </g>
                </g>
                {props.offers?.at(props.index).tokenId ? (
                  <g opacity="1" transform="translate(0 120)  rotate(0 113 16)">
                    <g opacity="1" transform="translate(0 0)  rotate(0 113 16)">
                      <g
                        opacity="1"
                        transform="translate(0 0)  rotate(0 47 16)"
                      >
                        <text>
                          <tspan
                            x="0"
                            y="24"
                            fontSize="24"
                            line-height="0"
                            fill="#361041"
                            opacity="1"
                            letterSpacing="0"
                          >
                            TokenID
                          </tspan>
                        </text>
                      </g>
                      <g
                        opacity="1"
                        transform="translate(138 0)  rotate(0 6 14.5)"
                      >
                        <text>
                          <tspan
                            x="0"
                            y="23"
                            fontSize="24"
                            line-height="0"
                            fill="#EDEDED"
                            opacity="1"
                            fontFamily="Inter-SemiBold"
                            letterSpacing="0"
                          >
                            •
                          </tspan>
                        </text>
                      </g>
                      <g
                        opacity="1"
                        transform="translate(164 0)  rotate(0 45 16)"
                      >
                        <text>
                          <tspan
                            x="0"
                            y="24"
                            fontSize="24"
                            line-height="0"
                            fill="#361041"
                            opacity="1"
                            letterSpacing="0"
                          >
                            #
                            {props.offers?.at(props.index).tokenId}
                          </tspan>
                        </text>
                      </g>
                    </g>
                  </g>
                ) : null}
              </g>
            </g>
            <g
              opacity="1"
              transform="translate(1051 1071) scale(-1 -1) rotate(0 522 14.5)"
            >
              <text>
                <tspan
                  x="0"
                  y="23"
                  fontSize="24"
                  line-height="0"
                  fill="#EDEDED"
                  opacity="1"
                  fontFamily="Inter-SemiBold"
                  letterSpacing="9.84"
                >
                  {props.offers?.at(props.index).Aaddress?.toUpperCase()}
                </tspan>
              </text>
            </g>
            <g
              opacity="1"
              transform="translate(543.5 537.5)  rotate(90 522 14.5)"
            >
              <text>
                <tspan
                  x="0"
                  y="23"
                  fontSize="24"
                  line-height="0"
                  fill="#EDEDED"
                  opacity="1"
                  fontFamily="Inter-SemiBold"
                  letterSpacing="9.84"
                >
                  {props.offers?.at(props.index).Baddress?.toUpperCase()}
                </tspan>
              </text>
            </g>
            <g
              opacity="1"
              transform="translate(-507.5 511.5)  rotate(-90 522 14.5)"
            >
              <text>
                <tspan
                  x="0"
                  y="23"
                  fontSize="24"
                  line-height="0"
                  fill="#EDEDED"
                  opacity="1"
                  fontFamily="Inter-SemiBold"
                  letterSpacing="9.84"
                >
                  {props.offers?.at(props.index).Baddress?.toUpperCase()}
                </tspan>
              </text>
            </g>
            <g opacity="1" transform="translate(32 0)  rotate(0 522 14.5)">
              <text>
                <tspan
                  x="0"
                  y="23"
                  fontSize="24"
                  line-height="0"
                  fill="#EDEDED"
                  opacity="1"
                  fontFamily="Inter-SemiBold"
                  letterSpacing="9.84"
                >
                  {props.offers?.at(props.index).Aaddress?.toUpperCase()}
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </svg>
    </div >
  ));
};
