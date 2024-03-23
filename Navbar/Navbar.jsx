import './Navbar.css'

const Navbar = ()=>{
    return(
    <nav className='minhaNav'>
        <img src="https://s3-alpha-sig.figma.com/img/fc41/dd5a/37c30e06e5f7b0fed5c7f7c013451853?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HWDx~w5XtW5ejrUYEVWBlaxdChWusIs8tqIQgiZFDCX94h0BcdTlL0BcQ-c7qhGrwwAzMQfOQiDEXfXMFbAodhLVSf5FoQM8bstB8IRxr2pnJx3QvQDSZaqOAzlgpiR0uS4IO9jjDru2uVbHPY5~zIvfdkhIyRj1QHODbzOh~Vd3dW9YJO4mWqq-E1dI2uZZCz04130Q4Otg0VrWogQt7bq25-4jUB4JEDJ0I97VTLIjJ0vWYeNfdNzI-hzDz-L9GSWiiA5lVsKgM9IEcieWTxBoGlfXuGKwE7PUAana46xZ6a04WjQCqusWVLD1ydUcvI6oIJRVVCXeUlUTU30MCA__" alt="" className='logoNav' />
        <ul className='ulNav'>
            <li className='liNav'>Login</li>
            <li className='liNav'>Registrar</li>
        </ul>
    </nav>
    )
}

export default Navbar