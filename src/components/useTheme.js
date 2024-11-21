//useTheme.js
import { shallowRef } from 'vue';
// 引入主题
import theme_day from './theme_day';
import theme_dark from './theme_dark';

// 定义在全局的样式变量
const theme = shallowRef({});

export function useTheme() {
  // 尝试从本地读取
  const localTheme = localStorage.getItem('theme');
  theme.value = localTheme ? JSON.parse(localTheme) : theme_day;
  
  const setDayTheme = () => {
    theme.value = theme_day;
    console.log('111');
  };
  
  const setDarkTheme = () => {
    theme.value = theme_dark;
    console.log('222');
  };
  
  return {
    theme,
    setDayTheme,
    setDarkTheme,
  };
}
