import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend-plus';
// 如果使用vite-plugin-vue-setup-extend插件 编译不会报错
import ViteRestart from 'vite-plugin-restart';

// vite-plugin-vue-setup-extend-plus和vite-plugin-restart插件在vite 版本2.9.0就可以使用
// 除了vue(),其他大部分插件使用 ***() 都会报错 is not function
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // vueSetupExtend(),  // vueSetupExtend.default() 就可以通过编译
        // ViteRestart({
        //     restart: [
        //         'vite.config.ts',
        //     ]
        // })
    ]
})
