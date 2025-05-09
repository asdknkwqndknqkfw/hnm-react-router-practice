import { useEffect, useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import ProductAll from './page/ProductAll'
import Login from './page/Login'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import PrivateRoute from './route/PrivateRoute';

// 1. 전체 상품 페이지, 로그인 페이지, 상품 상세 페이지
// 1-1. 네비게이션 바 만들기
// 2. 전체 상품 상세 페이지에서 전체 상품을 볼 수 있다
// 3-1. 로그인 버튼 클릭시 로그인 페이지 나온다
// 3-2. 상품 디테일 클릭시, 로그인 안되어있으면 로그인 페이지가 먼저 나온다.
// 4. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다
// 5-1. 로그아웃 버튼 클릭시, 로그아웃이 된다.
// 5-2. 로그아웃시 상품 디테일 페이지를 볼 수 없다, 다시 로그인 페이지로 이동
// 6. 로그인시 로그아웃이 보임, 로그아웃시 로그인이 보임
// 7. 상품을 검색 할 수 있다.

function App() {
  const [authenticate, setAuthenticate] = useState(false) // 로그인 여부

  useEffect(() => {
    console.log("authenticate value: ", authenticate);
  }, [authenticate]);

  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </>
  )
}

export default App
