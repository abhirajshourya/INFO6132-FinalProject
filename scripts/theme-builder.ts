
import { defaultSubThemes, defaultComponentThemes } from '@tamagui/themes/v3-themes'
import { createThemeBuilder } from '@tamagui/theme-builder'

const palettes = {
  
      "light": ['hsla(280, 34%, 62%, 1)','hsla(243, 48%, 91%, 0)','hsla(243, 48%, 91%, 0.25)','hsla(243, 48%, 91%, 0.5)','hsla(243, 48%, 91%, 0.75)','hsla(243, 48%, 91%, 1)','hsla(243, 48%, 88%, 1)','hsla(243, 48%, 84%, 1)','hsla(243, 48%, 81%, 1)','hsla(243, 48%, 77%, 1)','hsla(243, 48%, 74%, 1)','hsla(243, 48%, 70%, 1)','hsla(243, 48%, 67%, 1)','hsla(243, 48%, 63%, 1)','hsla(243, 48%, 60%, 1)','hsla(243, 48%, 19%, 1)','hsla(243, 48%, 9%, 1)','hsla(243, 48%, 9%, 0.75)','hsla(243, 48%, 9%, 0.5)','hsla(243, 48%, 9%, 0.25)','hsla(243, 48%, 9%, 0)','hsla(280, 34%, 64%, 1)']
    ,
      "dark": ['hsla(280, 34%, 62%, 1)','hsla(243, 48%, 16%, 0)','hsla(243, 48%, 16%, 0.25)','hsla(243, 48%, 16%, 0.5)','hsla(243, 48%, 16%, 0.75)','hsla(243, 48%, 16%, 1)','hsla(243, 48%, 21%, 1)','hsla(243, 48%, 25%, 1)','hsla(243, 48%, 30%, 1)','hsla(243, 48%, 35%, 1)','hsla(243, 48%, 40%, 1)','hsla(243, 48%, 45%, 1)','hsla(243, 48%, 50%, 1)','hsla(243, 48%, 55%, 1)','hsla(243, 48%, 60%, 1)','hsla(243, 48%, 93%, 1)','hsla(281, 48%, 96%, 1)','hsla(282, 50%, 96%, 0.75)','hsla(282, 50%, 96%, 0.5)','hsla(282, 50%, 96%, 0.25)','hsla(282, 50%, 96%, 0)','hsla(280, 34%, 70%, 1)']
    ,
      "light_accent": ['hsla(243, 48%, 81%, 1)','hsla(280, 34%, 60%, 0)','hsla(280, 34%, 60%, 0.25)','hsla(280, 34%, 60%, 0.5)','hsla(280, 34%, 60%, 0.75)','hsla(280, 34%, 60%, 1)','hsla(280, 34%, 60%, 1)','hsla(280, 34%, 61%, 1)','hsla(280, 34%, 62%, 1)','hsla(280, 34%, 62%, 1)','hsla(280, 34%, 63%, 1)','hsla(280, 34%, 63%, 1)','hsla(280, 34%, 64%, 1)','hsla(280, 34%, 64%, 1)','hsla(280, 34%, 65%, 1)','hsla(243, 48%, 95%, 1)','hsla(243, 48%, 16%, 1)','hsla(243, 48%, 16%, 0.75)','hsla(243, 48%, 16%, 0.5)','hsla(243, 48%, 16%, 0.25)','hsla(243, 48%, 16%, 0)','hsla(243, 48%, 63%, 1)']
    ,
      "dark_accent": ['hsla(243, 48%, 55%, 1)','hsla(280, 34%, 76%, 0)','hsla(280, 34%, 76%, 0.25)','hsla(280, 34%, 76%, 0.5)','hsla(280, 34%, 76%, 0.75)','hsla(280, 34%, 76%, 1)','hsla(280, 34%, 74%, 1)','hsla(280, 34%, 72%, 1)','hsla(280, 34%, 70%, 1)','hsla(280, 34%, 69%, 1)','hsla(280, 34%, 67%, 1)','hsla(280, 34%, 65%, 1)','hsla(280, 34%, 63%, 1)','hsla(280, 34%, 62%, 1)','hsla(280, 34%, 60%, 1)','hsla(243, 48%, 90%, 1)','hsla(243, 48%, 95%, 1)','hsla(245, 46%, 95%, 0.75)','hsla(245, 46%, 95%, 0.5)','hsla(245, 46%, 95%, 0.25)','hsla(245, 46%, 95%, 0)','hsla(243, 48%, 30%, 1)']
    
}
const templates = {
  
      "light_base": {"accentBackground":0,"accentColor":0,"background0":1,"background025":2,"background05":3,"background075":4,"color1":5,"color2":6,"color3":7,"color4":8,"color5":9,"color6":10,"color7":11,"color8":12,"color9":13,"color10":14,"color11":15,"color12":16,"color0":-1,"color025":-2,"color05":-3,"color075":-4,"background":5,"backgroundHover":4,"backgroundPress":6,"backgroundFocus":6,"borderColor":8,"borderColorHover":7,"borderColorPress":9,"borderColorFocus":8,"color":-5,"colorHover":-6,"colorPress":-5,"colorFocus":-6,"colorTransparent":-1,"placeholderColor":-8,"outlineColor":-2}
    ,
      "light_alt1": {"color":-6,"colorHover":-7,"colorPress":-6,"colorFocus":-7}
    ,
      "light_alt2": {"color":-7,"colorHover":-8,"colorPress":-7,"colorFocus":-8}
    ,
      "light_surface1": {"background":6,"backgroundHover":5,"backgroundPress":7,"backgroundFocus":7,"borderColor":9,"borderColorHover":8,"borderColorFocus":9,"borderColorPress":10}
    ,
      "light_surface2": {"background":7,"backgroundHover":6,"backgroundPress":8,"backgroundFocus":8,"borderColor":10,"borderColorHover":9,"borderColorFocus":10,"borderColorPress":11}
    ,
      "light_surface3": {"background":8,"backgroundHover":7,"backgroundPress":9,"backgroundFocus":9,"borderColor":11,"borderColorHover":10,"borderColorFocus":11,"borderColorPress":12}
    ,
      "light_inverseSurface1": {"color":6,"colorHover":5,"colorPress":7,"colorFocus":7,"background":-5,"backgroundHover":-6,"backgroundPress":-5,"backgroundFocus":-6,"borderColor":-7,"borderColorHover":-8,"borderColorFocus":-9,"borderColorPress":-10}
    ,
      "light_inverseActive": {"color":6,"colorHover":5,"colorPress":7,"colorFocus":7,"background":-7,"backgroundHover":-8,"backgroundPress":-7,"backgroundFocus":-8,"borderColor":-9,"borderColorHover":-10,"borderColorFocus":-11,"borderColorPress":-12}
    ,
      "light_surfaceActive": {"background":10,"backgroundHover":10,"backgroundPress":11,"backgroundFocus":11,"borderColor":10,"borderColorHover":10,"borderColorFocus":11,"borderColorPress":11}
    ,
      "dark_base": {"accentBackground":0,"accentColor":0,"background0":1,"background025":2,"background05":3,"background075":4,"color1":5,"color2":6,"color3":7,"color4":8,"color5":9,"color6":10,"color7":11,"color8":12,"color9":13,"color10":14,"color11":15,"color12":16,"color0":-1,"color025":-2,"color05":-3,"color075":-4,"background":5,"backgroundHover":6,"backgroundPress":4,"backgroundFocus":4,"borderColor":8,"borderColorHover":9,"borderColorPress":7,"borderColorFocus":8,"color":-5,"colorHover":-6,"colorPress":-5,"colorFocus":-6,"colorTransparent":-1,"placeholderColor":-8,"outlineColor":-2}
    ,
      "dark_alt1": {"color":-6,"colorHover":-7,"colorPress":-6,"colorFocus":-7}
    ,
      "dark_alt2": {"color":-7,"colorHover":-8,"colorPress":-7,"colorFocus":-8}
    ,
      "dark_surface1": {"background":6,"backgroundHover":7,"backgroundPress":5,"backgroundFocus":5,"borderColor":9,"borderColorHover":10,"borderColorFocus":9,"borderColorPress":8}
    ,
      "dark_surface2": {"background":7,"backgroundHover":8,"backgroundPress":6,"backgroundFocus":6,"borderColor":10,"borderColorHover":11,"borderColorFocus":10,"borderColorPress":9}
    ,
      "dark_surface3": {"background":8,"backgroundHover":9,"backgroundPress":7,"backgroundFocus":7,"borderColor":11,"borderColorHover":12,"borderColorFocus":11,"borderColorPress":10}
    ,
      "dark_inverseSurface1": {"color":6,"colorHover":7,"colorPress":5,"colorFocus":5,"background":-5,"backgroundHover":-6,"backgroundPress":-5,"backgroundFocus":-6,"borderColor":-7,"borderColorHover":-8,"borderColorFocus":-9,"borderColorPress":-10}
    ,
      "dark_inverseActive": {"color":6,"colorHover":7,"colorPress":5,"colorFocus":5,"background":-7,"backgroundHover":-8,"backgroundPress":-7,"backgroundFocus":-8,"borderColor":-9,"borderColorHover":-10,"borderColorFocus":-11,"borderColorPress":-12}
    ,
      "dark_surfaceActive": {"background":10,"backgroundHover":10,"backgroundPress":9,"backgroundFocus":9,"borderColor":10,"borderColorHover":10,"borderColorFocus":9,"borderColorPress":9}
    
}

export const themes = createThemeBuilder()
  .addPalettes(palettes)
  .addTemplates(templates)
  .addThemes({
    light: {
      template: 'base',
      palette: 'light',
    },
    dark: {
      template: 'base',
      palette: 'dark',
    },
  })
  .addChildThemes(
    palettes.light_accent
      ? {
          accent: [
            {
              parent: 'light',
              template: 'base',
              palette: 'light_accent',
            },
            {
              parent: 'dark',
              template: 'base',
              palette: 'dark_accent',
            },
          ],
        }
      : {}
  )
  .addChildThemes(defaultSubThemes)
  .addChildThemes(defaultComponentThemes, {
    avoidNestingWithin: [
      'alt1',
      'alt2',
      'surface1',
      'surface2',
      'surface3',
      'surface4',
      'active',
    ],
  })

  .build()
