import { ReactElement, ReactNode } from 'react';
import { LayoutProps } from 'src/interfaces';

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex w-full transition-all bg-main">
            <div className="relative w-full text-white mx-auto flex">
                <div className="w-full min-h-screen bg-main flex justify-between">
                    <div className="w-full bg-c-secondary-800">
                        <div className="w-full lg:px-5 ">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/**
 * @function getLayout
 * @param { ReactNode } children
 * @returns { ReactElement }
 */
export const getLayout = (children: ReactNode): ReactElement => <Layout>{children}</Layout>;
export default Layout;
