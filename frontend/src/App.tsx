import { BrowserRouter } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import Sidebar from './components/SideBar'
import Routes from './routes'
import Notification from "./components/notifications"
import { UserProvider } from './context/UserContext'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <UserProvider>
                    <Container fluid>
                        <Row>
                            <Header
                                title="Concierge"
                            />
                        </Row>
                        <Row className="container-page-content">
                            <Notification />

                            <Col md={1}>
                                <Sidebar />
                            </Col>
                            <Col>
                                <Routes />
                            </Col>
                            <Col md={1}>
                            </Col>
                        </Row>
                    </Container>
                    <Footer />
                </UserProvider>
            </BrowserRouter>
        </div>
    )
}

export default App