import React from "react";
import { withBlogConsumer } from "../../context";
import Blog from "./BlogFeatures";

function BlogsContainer({ context }) {
    const { blogs } = context;

    return (
        <>
            {blogs.map((item, index) => {
                return <Blog key={index} blog={item} />;
            })}
        </>
    );
}
export default withBlogConsumer(BlogsContainer);