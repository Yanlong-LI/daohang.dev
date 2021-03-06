/* eslint-disable no-console */
import {
  MessageBox
} from 'element-ui'
import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'service worker 正在 提取 APP 缓存.\n'
      )
    },
    registered () {
      console.log('服务注册成功')
    },
    cached () {
      console.log('应用已缓存，可供单机使用')
    },
    updatefound () {
      console.log('正在下载新内容')
    },
    updated (event) {
      console.log('新内容可用；重新加载时生效。')
      MessageBox.confirm(
        '有新的更新啦！重新启动后生效。',
        '更新提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'success'
        }
      ).then(() => {

        // window.open()

      }).catch(res => res)
    },
    offline () {
      console.log('找不到Internet连接。应用程序正在脱机模式下运行。')
    },
    error (error) {
      console.error('服务工作者注册期间出错：', error)
    }
  })
}
