import React from "react";
import styles from "./footer.module.less";

export class Footer extends React.Component<any, any> {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <img src="/logo.png" title="" width="160" />
            <br />© 2022, Rumble
          </div>
          <div className={styles.right}>
            <a
              href="https://twitter.com/marryinweb3"
              className={styles.social}
              target={"_blank"}
            >
              <svg width="19" height="17" viewBox="0 0 19 17" fill="none">
                <path
                  id="路径"
                  fillRule="evenodd"
                  style={{ fill: "currentColor" }}
                  transform="translate(0 0)  rotate(0 9.5 8.5)"
                  opacity="1"
                  d="M7.75,4.67C5.78,4.47 4.01,3.57 2.54,1.41C2.33,1.11 1.96,0.94 1.59,0.98C1.22,1.03 0.91,1.27 0.78,1.62C0.59,2.1 0.46,2.61 0.34,3.12C0.14,4 -0.05,5.23 0.01,6.55C0.08,7.88 0.4,9.35 1.27,10.67C1.89,11.61 2.78,12.45 3.97,13.08C3.13,13.61 2.2,13.91 0.97,14.26C0.54,14.38 0.25,14.77 0.24,15.22C0.24,15.66 0.54,16.06 0.96,16.18C3.4,16.89 5.86,17.13 8.02,16.93C10.18,16.74 12.14,16.11 13.51,15C16.09,12.9 17.31,9.86 17.15,5.49L18.87,2.47C19.06,2.13 19.04,1.71 18.81,1.4C18.59,1.08 18.2,0.92 17.82,0.99L16.02,1.33C15.14,0.44 13.61,-0.29 11.6,0.11C10.14,0.41 9.12,1.2 8.5,2.27C8.07,3 7.85,3.83 7.75,4.67Z "
                />
              </svg>
            </a>
            <a
              href="https://github.com/marryinweb3"
              target={"_blank"}
              className={styles.social}
            >
              <svg
                width="19"
                height="20.019999999999982"
                viewBox="0 0 19 20.019999999999982"
                fill="none"
              >
                <path
                  id="路径"
                  fill-rule="evenodd"
                  style={{ fill: "currentcolor" }}
                  transform="translate(0 -1.8207657603852567e-14)  rotate(0 9.5 10.01)"
                  opacity="1"
                  d="M6,19.02C6,19.57 6.45,20.02 7,20.02L13,20.02C13.55,20.02 14,19.57 14,19.02L14,16.02C14,15.45 13.88,14.91 13.67,14.42C14.63,14.09 15.5,13.63 16.26,13.06C17.89,11.83 19,10.06 19,8.02C19,6.67 18.52,5.43 17.71,4.4C17.92,3.58 17.9,2.75 17.82,2.12C17.75,1.55 17.65,0.81 17.25,0.36C16.66,-0.29 15.67,0.09 14.97,0.33C14.35,0.54 13.59,0.88 12.85,1.38C11.95,1.14 10.99,1.02 10,1.02C9.01,1.02 8.05,1.14 7.15,1.38C6.41,0.88 5.64,0.54 5.02,0.33C4.33,0.09 3.33,-0.29 2.74,0.36C2.34,0.81 2.25,1.5 2.18,2.08C2.18,2.09 2.17,2.11 2.17,2.12C2.09,2.75 2.07,3.58 2.28,4.4C1.48,5.44 1,6.67 1,8.02C1,10.06 2.11,11.83 3.74,13.06C4.5,13.63 5.37,14.09 6.33,14.42C6.12,14.9 6,15.44 6,16L5.83,16.03C5.12,16.13 4.66,16.04 4.34,15.91C3.58,15.59 3.19,14.78 2.71,14.16C2.42,13.77 1.98,13.29 1.32,13.07C0.79,12.9 0.23,13.18 0.05,13.7C-0.12,14.23 0.16,14.79 0.68,14.97C1.24,15.15 1.63,16.11 1.98,16.54C2.35,16.98 2.85,17.45 3.56,17.75C4.24,18.04 5.04,18.15 6,18.03L6,19.02Z "
                />
              </svg>
            </a>
            <a
              href="https://discord.gg/eAN9TaAaSq"
              target={"_blank"}
              className={styles.social}
            >
              <svg
                width="23"
                height="17.529999999999973"
                viewBox="0 0 23 17.529999999999973"
                fill="none"
              >
                <path
                  id="vector"
                  fill-rule="evenodd"
                  style={{ fill: "currentcolor" }}
                  transform="translate(0 8.881784197001252e-15)  rotate(0 11.5 8.765)"
                  opacity="1"
                  d="M5.87 17.53C4 16.95 2.09 16.07 0.12 14.62C0.11 14.61 0.1 14.59 0.09 14.57C-0.31 10.28 0.51 5.93 3.49 1.48L3.52 1.45C4.99 0.78 6.56 0.28 8.21 0C8.24 0 8.27 0.01 8.28 0.04C8.48 0.4 8.72 0.86 8.87 1.23C10.6 0.97 12.36 0.97 14.13 1.23C14.29 0.87 14.51 0.4 14.71 0.04C14.73 0.01 14.76 0 14.79 0C16.43 0.29 18 0.78 19.47 1.45L19.5 1.48C22.1 5.3 23.38 9.61 22.9 14.57C22.9 14.59 22.89 14.61 22.87 14.62C20.9 16.07 19 16.95 17.12 17.53C17.09 17.54 17.06 17.52 17.04 17.5C16.6 16.9 16.21 16.26 15.86 15.59C15.84 15.55 15.86 15.5 15.9 15.49C16.53 15.25 17.13 14.97 17.7 14.63C17.74 14.61 17.75 14.54 17.7 14.51C17.58 14.42 17.46 14.33 17.35 14.23C17.33 14.21 17.3 14.21 17.27 14.22C13.55 15.94 9.48 15.94 5.71 14.22C5.69 14.21 5.66 14.21 5.64 14.23C5.52 14.33 5.4 14.42 5.28 14.51C5.24 14.54 5.24 14.61 5.29 14.63C5.86 14.96 6.46 15.25 7.08 15.49C7.12 15.5 7.14 15.55 7.12 15.59C6.79 16.26 6.39 16.9 5.95 17.5C5.93 17.52 5.9 17.54 5.87 17.53ZM5.62 9.64C5.62 10.92 6.55 11.96 7.69 11.96C8.84 11.96 9.75 10.92 9.75 9.64C9.77 8.37 8.85 7.32 7.69 7.32C6.53 7.32 5.62 8.36 5.62 9.64ZM15.33 11.96C14.2 11.96 13.26 10.92 13.26 9.64C13.26 8.36 14.18 7.32 15.33 7.32C16.49 7.32 17.41 8.37 17.4 9.64C17.4 10.92 16.49 11.96 15.33 11.96Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
