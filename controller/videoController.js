import { videos_arr } from "../db"


//export const home = (req, res) => res.send("Home");
export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videos_arr }); // pug를 설치해서 /views 에서 알아서 찾아준다.
}
export const search = (req, res) => {
    const { query: { term: searchingBy } } = req;
    // var = req.query.term 과 동일

    res.render("search", { pageTitle: "Search", searchingBy: searchingBy, videos_arr });
}

export const videos = (req, res) => res.render("videos", { pageTitle: "Videos" });
export const upload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });