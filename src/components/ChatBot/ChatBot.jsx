import React, { useEffect } from "react";
import { fetchChatResponse } from "../../api";
import { Widget, addResponseMessage, toggleWidget } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import { LogoChat, LogoMobile } from "../../images";

const ChatBot = () => {
  useEffect(() => {
    const delay = setTimeout(() => {
      toggleWidget();
      addResponseMessage("Hi! Ask me anything about COVID-19");
    }, 1500);

    return () => clearTimeout(delay);
  }, []);

  const handleAsk = async (question) => {
    const answer = await fetchChatResponse(question);

    if (!answer) {
      addResponseMessage(
        "Sorry ! I can't answer your question right now :( \n\n Please come back later and have a nice day !"
      );
    } else {
      const highAccurateAnswer = answer.filter(
        (response) => response.score > 0.5
      );
      if (!highAccurateAnswer.length) {
        addResponseMessage(
          `Sorry ! There's no answer to this question :( \n\n Please type in a question related to COVID-19 \n\n Examples : \n\n What is COVID-19 ? \n\n How does COVID-19 spread ? \n\n Can I catch COVID-19 from my pet or other animals ?`
        );
      } else addResponseMessage(highAccurateAnswer[0].answer);
    }
  };
  return (
    <Widget
      handleNewUserMessage={handleAsk}
      profileAvatar={LogoChat}
      senderPlaceHolder={"Type your question here"}
      title={"HELP CENTER"}
      titleAvatar={LogoMobile}
    />
  );
};

export default ChatBot;
