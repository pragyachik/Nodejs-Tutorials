import Link from "next/link";

export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <h2 className="title">
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <style jsx>
                {`
                    .title a {
                        color: #0070f3;
                        text-decoration: none;
                      }
              
                      .title a:hover,
                      .title a:focus,
                      .title a:active {
                        text-decoration: underline;
                      }
              
                      .title {
                        margin: 0;
                        line-height: 1.15;
                        font-size: 1rem;
                      }
                `}
            </style>
        </>
    );
  }  