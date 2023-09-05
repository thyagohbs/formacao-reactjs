import { useState } from "react";
import ArticleList from "./Components/ArticleList/ArticleList";
import Header from "./Components/Header";
import Form from "./Components/Form/Form";

const App = () => {
  const [user, setUser] = useState();
  const hasUser = Boolean(user)

  return (
    <div className="h-screen">
      <Header user={user} />
      {hasUser && <ArticleList />}
      {hasUser || <Form onSubmit={setUser} />}
    </div>
  )
}

export default App;