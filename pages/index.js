import { poolDb } from "@/components/pooldb";

export default function Farms() {
  const showModal = () => {
    const { Modal } = require("bootstrap");
    const myModal = new Modal("#stakemodal");
    myModal.show();
  };

  return (
    <div className='container' style={{ fontFamily: 'SF Pro Display' }}>
      <div className="col-lg-10 my-2 mx-auto rounded shadow-sm">
        <h3 className='mx-auto'>DeFI Staking Pools</h3>
        <video autoPlay muted loop playsInline>
          <source className="rounded d-flex justify-content-center" type="video/webm" src="bannervid.webm" width="1500px" />
        </video>
      </div>
      {poolDb.map((data, i) => (
        <div key={i} className="d-flex align-items-center col-lg-10 mx-auto p-2 pb-1 mb-1 text-white rounded shadow-sm"
          style={{ backgroundColor: '#00000060' }}>
          <div className='d-grid col-2 mx-3'>
            <h6>Stake {data.lptoken}, Earn {data.rwdtoken} </h6>
            <h3 className="text-white"><img src={data.lplogo} width={70} />/<img src={data.rwlogo} width={70} /></h3>
            <small></small>
          </div>
          <div className='d-grid col-2'>
            <h6>Flex APY</h6>
            {/* <h5>{poolArray[i].apy}%</h5> */}
          </div>
          <div className='d-grid col-2 '>
            <h6>My Stakings</h6>
            {/* <h5 style={{ color: '#02D8E9', textShadow: '0px 0px 2px #ffffff90' }}>{poolArray[i].userstaked}</h5> */}
          </div>
          <div className='d-grid col-2'>
            <h6>Pending Rewards</h6>
            {/* <h5 style={{ color: '#39FF14' }}>{poolArray[i].reward}</h5> */}
          </div>
          <div className='d-grid col-2 mx-1'>
            <h6>Total Staked In Pool</h6>
            {/* <h5>{poolArray[i].totalstaked} <img src={data.lplogo} width={50} /></h5> */}
          </div>
          <div className='d-grid col'>
            <button type="button" className="btn btn-md stakestyle" onClick={() => showModal(i)}>
              Open Pool
            </button>
            <div id={"autorunmodal" + i} className="modal fade" role="dialog">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content" style={{ background: '#05014a' }}>
                  <div className="modal-header">
                    <h4 className="modal-title">Stake <img src={data.lplogo} width={70} />/<img src={data.rwlogo} width={70} /></h4>
                    <div id='result' />
                  </div>
                  <div className="modal-body mx-auto col-10">
                    <div className='d-grid mx-auto col-10'>
                      <input style={{ background: '#ffffff40', color: 'white' }} className='form-control' type='text' id={'amt' + i} placeholder='Input Amount: Ex: 3231.19'></input>
                    </div>
                    <div className='row pb-2' style={{ fontWeight: '800' }}>
                      <div className='d-grid mx-auto col-4 mt-2'>
                        <button onClick={() => stakeTokens(i, poolArray[i].tokenaddr)} className='btn btn-dark'>STAKE</button>
                      </div>
                      <div className='d-grid mx-auto col-4 mt-2'>
                        <button onClick={() => unstakeTokens(i, poolArray[i].tokenaddr)} className='btn btn-dark'>UNSTAKE</button>
                      </div>
                    </div>
                    <div className='d-grid mx-auto col-6'>
                      {/* <button onClick={autoCompound} className={data.autocompclass}>{data.autocompound}</button> */}
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className='d-grid col'>
                      <h6>Your Stakings</h6>
                      {/* <h5 style={{ color: '#02D8E9', textShadow: '0px 0px 2px #ffffff90' }}>{poolArray[i].userstaked}</h5> */}
                    </div>
                    <div className='d-grid col'>
                      <h6>Your Earnings</h6>
                      {/* <h5 style={{ color: '#39FF14', textShadow: '0px 0px 2px #ffffff90' }}>{poolArray[i].reward}</h5> */}
                    </div>
                    <div className='d-grid col'>
                      <h6>Multiplier</h6>
                      {/* <h4 style={{ color: 'red', textShadow: '0px 0px 1px #ffffff' }}>x{poolArray[i].multiplier}</h4> */}
                    </div>
                    <div className='d-grid col'>
                      <h6>In Your Wallet</h6>
                      {/* <h5 style={{ color: 'white', textShadow: '0px 0px 1px #ffffff' }}>{poolArray[i].userbalance}</h5> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
