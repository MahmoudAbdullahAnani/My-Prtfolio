import React from "react";
import SocialMedia from "../../Components/SocialMedia";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home">
      <div className="typewriter pt-5 ps-5">
        <h1 className="fw-bold mt-5 text-white p-3 ">Mahmoud Abdullah</h1>
      </div>
      <div className="typewriter  ps-2">
        <h4 className="fw-bold ms-4 mt-2">Frontend Web Developer.</h4>
      </div>
      <SocialMedia />
      <div className="mt-4 ms-5">
        <a
          href="https://doc-08-c8-docs.googleusercontent.com/docs/securesc/l2vmfrq0givv75o1ghhgbb9s001482gk/1ti9b4plj36j2e7p89heu2ra4gqkss5t/1666735650000/00097012263396861696/00097012263396861696/1ry2PXcSXP6qumu136RGaCNOAGZ1EzeDB?e=download&amp;ax=ALW9-sAw9sF2yCZtcm6tJv1pyQSLrm-6gaSB3woxS5IlbCC9GtQhHyK9sRpVw1tMnYWoXcfY0MITk8PHRQLXEb5YTRPWbFRaDSLjjfeL8RLSYlGby7pPh8t4OSupP1VoBXPQw3kPEY4RosiXvSUkG-z1OWgTvwDHbP0KwbuUVK5NinbUiyRvhb39C_xpXWDcfmL-N7jAaIRCFYgUujmvtG3P0hqHGAK8y5N-2t-tuw7b4LGrFe6EM9gdi_moH51MPh3TpM1Vx0IYOHQqEnJ73fMJK7W8VT64EAoNosIDotPrKHempU8LgLV9c_op9t5VlXHjUe7Fj00DKcJCimcAhl4-5yC7_0B9wBfWuD9Z3zoB-0ZBKSK8hpSnDn4YfyrIleee5aJrw_3P9PQ69HMcD2edI8jZooJKow1t-TUrZwUim6xwmfDrPAzIEsvaG2o_9IO3YWmxG7jsRwUAKUycBvjW02KzgOgyHYRSbc9wnys8KY9_6s4hPiT6E6hQejM6en2Pg3DBnOp8EnWAbRAR5q-aLEp_r3VKhR3kgkhEWR1El9TAimhV4jC0kxXFgkOIXxW-Mm1G1i7MPnD8TQKyEq8zlaOX39TNZPfbrEEHn8y3GF751EoW8y5cw40oXdRQ2_u8nUZFJO22TgPV4-FAqed8vbKvKT39AUnBpbDUQJDfuLcmheCDjUucg7EyR1XYW8fbZSk-oSz3oa8libLXM2KgNNEVSMsjxLQ6wlu3g5V_SNlkzdrjetz9IeTo-BqhFL-j0fooZ1has2d0STme4AHpd7zivL2cf5ShzHaAw0y9Wt9KEmPe7EEl7K6kVe5L2WYlYV7HZN6kOMCgbb4wb8Gx40ZPqR_CbvKwUYS7uHDkm8kx_LEeDBd5XDeZUTzroQ4whAH_&amp;uuid=0c366994-50a6-4a08-8728-ae8df575c049&amp;authuser=0&amp;nonce=um92a0fmgvvuo&amp;user=00097012263396861696&amp;hash=ma7d32e6b3o2nls9kfljocflincce481"
          className=""
          download="Mahmoud-Abdullah-Anani.pdf"
        >
          <button type="button" class="fs-5 fw-bold btn btn-primary">
            Download My CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
