import logo from '../images/logo.jpeg'
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          {/* <a className='navbar-brand page-scroll' href='#page-top'>
            Q Fund
          </a>{' '} */}
          <img src={logo} width="50" height="55" alt="gg"/>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>

            <li><button class='button' style={{backgroundColor:'blue', borderRadius: '14px',padding:'10px 28px', color:'white', fontSize:'18px',border:'none'}}>Login</button>&nbsp;&nbsp;&nbsp;</li>
            
            
            <li><button class='button' style={{backgroundColor:'blue', borderRadius: '14px',padding:'10px 28px', color:'white', fontSize:'18px',border:'none'}}>SignUp</button></li>

            
          </ul>
        </div>
      </div>
    </nav>
  )
}
