import styles from "../styles/Homepage.module.scss";
import Image from "next/image";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const lanyard = fetch(
        "https://api.lanyard.rest/v1/users/564434085708038144"
    );
    const data = await (await lanyard).json();
    if (data.data.discord_status == "online") {
        return {
            props: {
                statusText: "Online"
            }
        };
    } else if (data.data.discord_status == "idle") {
        return {
            props: {
                statusText: "Idle"
            }
        };
    } else if (data.data.discord_status == "dnd") {
        return {
            props: {
                statusText: "Do not disturb"
            }
        };
    } else if (data.data.discord_status == "offline") {
        return {
            props: {
                statusText: "Offline"
            }
        };
    } else {
        return {
            props: {
                data: "test"
            }
        };
    }
};

export default function Home(
    data: InferGetServerSidePropsType<typeof getServerSideProps>
): JSX.Element {
    return (
        <div className={styles.Container}>
            <Head>
                <title>EncryptedDev</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Image
                src={require("../public/Background.png")}
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <Image
                src={require("../public/logo.png")}
                alt="Picture of the author"
                width={300}
                height={300}
                className={styles.Avatar}
            />
            <div>
                <p className={styles.Status}>{data.statusText}</p>
                <h1 className={styles.Title}>EncryptedDev</h1>
                <p className={styles.Title}>
                    Full-stack software engineer & UI Designer
                </p>
            </div>
        </div>
    );
}
