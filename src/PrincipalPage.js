import Top from './Top';
import Content from './Content';
import Bottom from './Bottom';
import FrontPage from './FrontPage';

export default function PrincipalPage() {
    return (
        <>
            <div className="principalPageRoot">
                <Top />
                <Content />
                <Bottom />
            </div>
        </>
    )
}