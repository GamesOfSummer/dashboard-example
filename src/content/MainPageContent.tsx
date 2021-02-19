import React from 'react';
import Cards from '../components/Cards';
import JumbotronPage from './JumbotronPage';

const MainPageContent = () => {
    return (
        <div>
            <JumbotronPage />
            <main>
                <div className="container">
                    <section
                        className="section pb-3 wow fadeIn"
                        data-wow-delay="0.3s"
                    >
                        <h1 className="font-weight-bold text-center h1 my-5">
                            Freebies
                        </h1>

                        <p className="text-center grey-text mb-5 mx-auto w-responsive">
                            A few articles that can supercharge your
                            development!
                        </p>
                    </section>
                    {Cards()}
                </div>
            </main>
        </div>
    );
};

export default MainPageContent;
