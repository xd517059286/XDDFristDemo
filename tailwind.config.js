// todo https://tailwindcss.com/docs/customizing-colors
module.exports = {
  prefix: '', //添加前缀
  important: false,// 该important选项使您可以控制是否应将Tailwind的实用程序标记为!important。启用此选项不会自动将您自己的任何自定义实用程序标记为!important。
  purge: [ // 删除未使用的CSS
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    extend: { // 扩展默认调色板
      colors: { // todo https://tailwindcss.com/docs/customizing-colors
        "main-colour": '#8ccdae',
      },
      spacing:{ // todo https://tailwindcss.com/docs/customizing-spacing

      }
    },

  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active','odd', 'even'],
    borderWidth: ['responsive', 'first','last', 'hover', 'focus','odd', 'even'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
