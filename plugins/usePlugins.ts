
export default defineNuxtPlugin(nuxtApp => {
    // return {
    //     provide: {
    //         name: (value: any) => `${value} quy`
    //     }
    // }   
    nuxtApp.hook('app:mounted', (..._args) => {
    //    console.log('onMounted')
    //    console.log(_args)
      })
    nuxtApp.vueApp.directive('focus', {
        mounted(el) {
            el.focus()
            // console.log(el)
        },
        getSSRProps(binding, vnode) {
            // console.log('binding',binding)
            // console.log('vnode',vnode)
            return{
                value: binding.value = 'Test Value'
            }
        }
    })
    // console.log('url:',nuxtApp.ssrContext?.url)
    // console.log('Payload:',nuxtApp.ssrContext?.payload)
    // console.log('Event:',nuxtApp.ssrContext?.event)
  });