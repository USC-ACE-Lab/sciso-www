## A Tale of Two Communities: Exploring Academic References on Stack Overflow

Author: Run Huang (USC) and Souti Chattopadhyay (USC)

ACM Web Conference 2024, Short Paper

#### Paper: https://doi.org/10.1145/3589335.3651464

#### Dataset: https://figshare.com/articles/dataset/The_SORef_Dataset/25195805

#### Website: https://sciso.vercel.app/

### 1. Included Academic Repositories

Each academic repository may have multiple web domains, e.g., ACL articles may be hosted on [aclanthology.org](https://aclanthology.org/) or [aclweb.org](http://aclweb.org/). For a full list of curated web domains, see `pub_regs.json`.
| Type | Sources |
| ----------- | ----------- |
| Publishers | ACM, BMC, Cambridge University Press, De Gruyter, Elsevier, Emerald, Frontiers, Hindawi, ICST, IEEE, IET, IGI Global, Inderscience, INFORMS, Ingenta, IOS Press, Liebert Open Access, MDPI, MIT Press, NOW Publishers, Old City Publishing, Oxford University Press, revues online, RonPub, SAGE Publications, SIAM, Springer, Taylor & Francis, Versita, Wiley, World Scientific |
| Academic Socieities | Association for Computational Linguistics<br><small>_including: ACL, NAACL, EMNLP, EACL, etc._</small><hr>Association for the Advancement of Artificial Intelligence<br><small>_including: AAAI, IAI, ICWSM, etc._</small><hr>International Machine Learning Society<br><small>_including: JMLR, ICML, MLR, TMLR, etc._</small><hr>International Association for Cryptologic Research<br><small>_including: Crypto, AsiaCrypt, Fast Software Encryption_</small><hr>Computer Vision Foundation<br><small>_including: CVPR, ICCV, ECCV, WACV_</small><hr>USENIX<br><small>_including: OSDI, NSDI, USENIX Security, ATC_</small><hr>American Math Society<hr>ACM Special Interest Groups (SIGs)<br><small>*note: some SIGs may host programs on their individual domains, e.g., SIGCHI.org</small><hr>IEEE Computer Society<hr>Individual Conferences<br><small>*including: ICLR, IJCAI, NeurIPS, NDSS, VLDB, WWW, EMSOFT\*</small>|
| Academic Databases | arXiv, OpenReview, paperswithcode, Semantic Scholar, ResearchGate, Nature, PloS, PNAS, Cell Press, NIH (PubMed, PubChem), HAL, NBN Resolver, CEUR Workshop Proceedings

<!-- USENIX, ACM SIGs (e.g., SIGCHI), IEEE Computer Society<hr>Computer Vision Foundation,<br>International Association for Cryptologic Research,<br>International Machine Learning Society,<br>Association for the Advancement of Artificial Intelligence,<br>Association for Computational Linguistics<br>| -->

### 2. Dataset of Academic References

This dataset is a comprehensive collection of 15009 academic references cited in Stack Overflow posts (including questions, answers, community wikis, etc.) as of December 8, 2023. It represents a valuable resource for researchers and practitioners interested in understanding the intersection of academic knowledge and discussions about practical challenges on one of the largest technical forums online.

_Access the dataset [here](https://doi.org/10.6084/m9.figshare.25195805.v1)_

#### 2.1 Dataset Format

The data is structured in Line-delimited JSON (JSONL) format. Each line contains metadata of an academic reference (e.g., see `meta_example.json`). Fields in the metadata are described below.

#### 2.2 Field Description

- PostId  
  ID of the post containing this academic reference. Corresponding to the `Id` field in the [`StackOverflow-posts`](https://archive.org/download/stackexchange/stackoverflow.com-Posts.7z) table of the official Stack Exchange data dump.  
  _e.g.,_ [`74109833`](https://stackoverflow.com/questions/74109833/how-to-set-learning-rate-0-2-when-training-transformer-with-noam-decay) <small>(click to see the original post on Stack Overflow)</small>

- Url  
  URL of the academic reference.  
  _e.g.,_ [`https://aclanthology.org/C18-1054.pdf`](https://aclanthology.org/C18-1054.pdf)

- metadata

  - title
  - authors
  - venue  
     <small>Normalized to the full official name via Semantic Scholar<br>(e.g., ACL -> Annual Meeting of the Association for Computational Linguistics)</small>
  - open_access  
    <small>Whether the referenced article is publicly accessible</small>
  - citation_count
  - abstract
  - type
  - external_ids
  - year
  - concepts

- Topic  
  Topic label assigned by BERTopic

- RevisionId  
  We collected URLs from every historic version of a post. RevisionId is the ID of the changelog where we found this academic reference. Corresponding to the `Id` field in the [`StackOverflow-PostHistory`](https://archive.org/download/stackexchange/stackoverflow.com-PostHistory.7z) table of the official Stack Exchange data dump.  
  _e.g.,_ `280345137`

- History  
  Type of edits (e.g., initial, edit title, edit body, etc.). Corresponding to the `PostHistoryTypeId` field in the [`StackOverflow-PostHistory`](https://archive.org/download/stackexchange/stackoverflow.com-PostHistory.7z) table of the official Stack Exchange data dump. See [here](https://meta.stackexchange.com/questions/2677/database-schema-documentation-for-the-public-data-dump-and-sede) for details.

- AnswerCount
- CommentCount
- FavoriteCount
- PostTyepeId
- Score
- ViewCount

### 3. Interactive Figures

https://sciso.vercel.app/
