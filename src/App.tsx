import { useState } from "react";
import "./App.css";
import { Button, ConfigProvider, Radio, RadioChangeEvent } from "antd";
import DemoTable from "./components";
import './theme/default.css'
import './theme/dark.css'
import './App.css'

function App() {
  enum ThemeType {
    DEFAULT = "default",
    DARK = "dark",
  }
  const [theme, setTheme] = useState<ThemeType>(ThemeType.DEFAULT);
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setTheme(e.target.value);
  };
  return (
    <ConfigProvider prefixCls={theme}>
      <div className={['App',theme].join(' ')}>
        <Radio.Group onChange={onChange} value={theme}>
          <Radio value={ThemeType.DEFAULT}>default</Radio>
          <Radio value={ThemeType.DARK}>dark</Radio>
        </Radio.Group>
        <div>current theme:{theme}</div>
        <DemoTable></DemoTable>
      </div>
    </ConfigProvider>
  );
}

export default App;

// less to css
// lessc --js --modify-var="ant-prefix=dark" node_modules/antd/dist/antd.less /src/theme/default.css 
// lessc --js --modify-var="ant-prefix=dark" node_modules/antd/dist/antd.dark.less src/theme/dark.css