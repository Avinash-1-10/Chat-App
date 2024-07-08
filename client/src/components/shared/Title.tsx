import React from "react";
import { Helmet } from "react-helmet-async";

interface TitleProps {
  title?: string;
  description?: string;
}
const Title: React.FC<TitleProps> = ({
  title = "ChatMe",
  description = "This is a chat app",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
