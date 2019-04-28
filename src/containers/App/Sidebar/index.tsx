import {Nav} from 'office-ui-fabric-react/lib/Nav';
import * as React from 'react'
import "./index.css"


// @ts-ignore
const SidebarMenu = ({match}) => {
    // tslint:disable-next-line:no-console
    // console.log("here is match ", match);
    const selectedKeys = match.path.substr(1);
    const defaultOpenKeys = selectedKeys.split('/')[1];



    return (
        <div className='SidebarMenu'>
            <Nav
                expandedStateText="expanded"
                collapsedStateText="collapsed"
                selectedKey={defaultOpenKeys}
                expandButtonAriaLabel="Expand or collapse"
                styles={{
                    root: {
                        height: "100%",
                        overflowY: 'auto',
                        width: '100%',
                    }
                }}
                groups={[
                    {
                        links: [
                            {
                                icon: 'Home',
                                key: 'home',
                                name: 'Home',
                                url: '#',

                            },
                            {
                                isExpanded: true,
                                key: 'pages',
                                links: [
                                    {
                                        /*icon: "Page",*/
                                        key: 'sample',
                                        name: 'Sample Page',
                                        url: '/sample',

                                    },
                                ],
                                name: 'Pages',
                                url: '#',

                            },
                            {
                                isExpanded: false,
                                key: 'forms',
                                links: [
                                    {
                                        key: 'form/simple',
                                        name: 'Simple',
                                        url: '/form/simple',

                                    },
                                    {
                                        key: 'form/dynamic',
                                        name: 'Dynamic',
                                        url: '/form/dynamic',

                                    }
                                ],
                                name: 'Forms',
                                url: '#',
                            },
                            {
                                isExpanded: false,
                                key: 'tables',
                                links: [
                                    {
                                        key: 'tables/simple',
                                        name: 'Simple',
                                        url: '/tables/simple',

                                    },
                                    {
                                        key: 'tables/grouped',
                                        name: 'Grouped',
                                        url: '/tables/grouped',

                                    }
                                ],
                                name: 'Tables',
                                url: '#',
                            },
                        ]
                    }
                ]}
            />
        </div>
    );
};

export default SidebarMenu;