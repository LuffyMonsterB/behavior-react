import { Link, Outlet } from "umi";
import {
  Loading,
  Decoration10,
  Decoration8,
  Decoration6,
  Decoration3,
} from "@jiaminghi/data-view-react";
import "@/assets/datav/style.scss";
import "./index.less";

export default function Layout() {
  return (
    <div>
      <div className="bg-black w-full h-20 p-t-2">
        {/* 第一行 */}
        <div className="flex justify-center h-16">
          <div className="dv-dec-10">
            <Decoration10 />
          </div>
          <div className="dv-dec-8">
            <Decoration8 color={["#568aea", "#000000"]} />
          </div>

          <div className="title">
            <span className="title-text">
              校园人员管理平台
              <div className="dv-dec-6">
                <Decoration6 color={["#50e3c2", "#67a1e5"]} reverse={true} />
              </div>
            </span>
          </div>

          <div className="dv-dec-8">
            <Decoration8 color={["#568aea", "#000000"]} reverse={true} />
          </div>
          <div className="dv-dec-10-s">
            <Decoration10 />
          </div>
        </div>
        {/* 第二行 */}
        <div className="flex h-4">
          <div className="aside-width flex items-center">
            <div className="react-left m-l-4 react-l-s flex items-center">
              <span className="react-before" />
              <button className="active-btn">首页</button>
              <button className="deactive-btn">首页</button>
              <button>首页</button>
            </div>
            <div className="dv-decoration-3">
              <Decoration3 />
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
