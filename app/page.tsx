import { alegreya } from "@/app/ui/Fonts";
import styles from "@/styles/page.module.css";
import Link from "next/link";
import { getBaseUrl } from "@/lib/utils";
import { Fragment } from "react";
import Heatmap, { RowHeatmapWithSelect } from "@/app/ui/dashboard/Heatmap";
import Stack from "./ui/Stack";
import ResponsiveIframe from "./ui/dashboard/ResponsiveIframe";
import Swarm from "./ui/dashboard/Swarm";

async function getData(path: string) {
  const res = await fetch(`${getBaseUrl()}/${path}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await res.json();
}

export default async function Page() {
  const heatmapData = await getData("/hm.json");
  const simplifiedHeatmapData = await getData("/hm_simplified.json");
  const venueData = await getData("/venue.json");

  return (
    <Fragment>
      <article className={`${alegreya.className} ${styles.intro}`}>
        Stack Overflow is widely recognized as a go-to resource for quick
        technical fixes, rather than a forum for scholarly debates. However, it
        is not uncommon to encounter references to academic research in Stack
        Overflow discussions, which naturally prompts a series of questions...
        <p className={styles.question_paragraph}>
          Why is this the case? What academic research is being cited and who is
          citing it? What motivates Stack Overflow users to refer to academic
          research? How do they use academic research and what are the
          implications of this usage? ......
        </p>
        To shed light on these questions, we presented what we believe to be the
        first large-scale collection and analysis of academic references on
        Stack Overflow. Our study sifted through 44 million URLs found in the
        edit histories of 59 million posts (totaling 160 million revisions) and
        identified 15,066 references to 10,718 unique academic articles
        published in over 2,900 venues. We have made the dataset available for{" "}
        <Link href="https://figshare.com/articles/dataset/The_SORef_Dataset/25195805/1">
          download
        </Link>
        , aiming to facilitate further research into the interaction of academic
        knowledge and discussions about practical challenges on one of the
        largest technical forums online. This website interactively presents the
        findings of our study.
      </article>
      <section style={{ marginTop: "1rem" }} className={alegreya.className}>
        <h2 className={styles.section_title}>
          What Fields of Research (FoR) are referenced in different discussions?
        </h2>
        <Stack
          orient="vertical"
          align="start"
          gap="1.6rem"
          className={styles.graph_container}
        >
          <Stack align="start">
            <div>
              Choose a technical domain to see which Fields of Research are
              cited within the discussions of this domain.
              <i>(Note: FoRs not being cited are not shown)</i>
            </div>
            <RowHeatmapWithSelect
              data={heatmapData}
              margin={{
                top: 0,
                right: 0,
                bottom: 92,
                left: 0,
              }}
              axisBottom={{ tickSize: 3, tickPadding: 5, tickRotation: 90 }}
              defaultKey="D10_cryptography_hashing_rsa"
              height="12.4rem"
              fontSize={7.5}
              transpose={true}
              visibleOnMobile={10}
              hoverTarget="cell"
            />
          </Stack>
          <Stack align="start">
            <div>
              Choose a Field of Research to see how it is referenced across
              different technical domains of Stack Overflow discussions.
            </div>
            <RowHeatmapWithSelect
              data={heatmapData}
              margin={{
                top: 10,
                right: 0,
                bottom: 150,
                left: 0,
              }}
              axisLeft={{ tickSize: 0, tickPadding: 20 }}
              axisTop={{ tickSize: 0, tickPadding: 20 }}
              axisBottom={{ tickSize: 6, tickPadding: 9, tickRotation: 90 }}
              mobileMargin={{ top: 0, right: 0, bottom: 160, left: 0 }}
              defaultKey="theoretical computer science"
              fontSize={7.5}
              height="20rem"
              hoverTarget="cell"
              circle={true}
            />
          </Stack>
        </Stack>
        <h2 className={styles.section_title}>
          How do Stack Overflow communities interact with academic research?
        </h2>
        <Stack
          orient="vertical"
          align="start"
          gap="1.6rem"
          className={styles.graph_container}
        >
          <Stack align="start">
            <div>
              To better interpret and visualize the interaction between various
              technical domains and academic research, we first simplified the
              bipartite network by aggregating 60+ Fields of Research into 7
              broad disciplines. The heatmap below illustrates the distribution
              of references to different Fields of Research across 16 technical
              domains. Cell (x,y) denotes the percentage of papers referenced by
              domain x that originate from discipline y. For example, 79.9% of
              the articles referred in domain D0 are from the AI/ML/CV/NLP
              discipline.
            </div>
            <Heatmap
              margin={{
                top: 10,
                right: 160,
                bottom: 56,
                left: 0,
              }}
              data={simplifiedHeatmapData}
              axisTop={{ tickSize: 0, tickPadding: 20 }}
              axisRight={{ tickSize: 3, tickPadding: 5 }}
              axisBottom={{ tickSize: 3, tickPadding: 8, tickRotation: 30 }}
              mobileMargin={{
                top: 6,
                right: 22.4,
                bottom: 56,
                left: 0,
              }}
              height="60rem"
              fontSize={8}
              circle={true}
            />
            <div>
              We further map the structure of scientific knowledge on Stack
              Overflow through a co-citation network below. Each node in this
              network represents an academic article and is connected to another
              if they were jointly referenced by the same post. The node size
              reflects the article’s PageRank score, denoting its importance and
              influence across the network
            </div>
            <ResponsiveIframe src="/cc.html" />
          </Stack>
          {/* <Stack align="start">
            <Swarm data={venueData} height="24rem" />
          </Stack> */}
        </Stack>
      </section>
    </Fragment>
  );
}
