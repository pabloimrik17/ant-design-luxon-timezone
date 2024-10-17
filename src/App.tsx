import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Col, ConfigProvider, Row } from "antd";
import enUS from "antd/es/locale/en_US";
import LuxonDatePickerComponent from "./components/luxon-date-picker.component.tsx";
import { DateTime } from "luxon";

function App() {
    const [ dateEmpty, setDateEmpty ] = useState<null | DateTime>(null);
    const [ dateDefault, setDateDefault ] = useState<null | DateTime>(DateTime.now());

    return (
        <ConfigProvider locale={enUS}>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Empty value === NO SETTINGS TIMEZONE (TAKES USER TZ) </h1>
            <Row justify={"center"}>
                <Col span={"auto"}>
                    <LuxonDatePickerComponent value={dateEmpty} onChange={setDateEmpty}/>
                </Col>
                <Col span={24}>
                    <p>Iso Date{dateEmpty?.toISO()}</p>
                    <p>Time zone{dateEmpty?.zoneName}</p>
                </Col>
            </Row>
            <h1>Default Datetime === SETTINGS TIMEZONE </h1>
            <Row justify={"center"}>
                <Col span={"auto"}>
                    <LuxonDatePickerComponent value={dateDefault} onChange={setDateDefault}/>
                </Col>
                <Col span={24}>
                    <p>Iso Date{dateDefault?.toISO()}</p>
                    <p>Time zone{dateDefault?.zoneName}</p>
                </Col>
            </Row>

        </ConfigProvider>
    )
}

export default App
