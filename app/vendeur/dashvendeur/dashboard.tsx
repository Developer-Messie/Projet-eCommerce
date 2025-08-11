import React from 'react'


function Dashboard() {

    return (
        <>
            <section className='overall'>
                <div className="wrapper mx-auto">
                    <div>
                        <h2 className="mb-4">Bienvenue sur votre tableau de bord</h2>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="card text-white bg-primary">
                                    <div className="card-body">
                                        <h5 className="card-title">Total commandes</h5>
                                        <p className="card-text fs-4">120</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card text-white bg-success">
                                    <div className="card-body">
                                        <h5 className="card-title">Promotions actives</h5>
                                        <p className="card-text fs-4">4</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card text-white bg-warning">
                                    <div className="card-body">
                                        <h5 className="card-title">Notifications</h5>
                                        <p className="card-text fs-4">3 nouvelles</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard
