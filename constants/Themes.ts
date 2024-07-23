type Theme = {
  accentBackground: string;
  accentColor: string;
  background0: string;
  background025: string;
  background05: string;
  background075: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  color0: string;
  color025: string;
  color05: string;
  color075: string;
  background: string;
  backgroundHover: string;
  backgroundPress: string;
  backgroundFocus: string;
  borderColor: string;
  borderColorHover: string;
  borderColorPress: string;
  borderColorFocus: string;
  color: string;
  colorHover: string;
  colorPress: string;
  colorFocus: string;
  colorTransparent: string;
  placeholderColor: string;
  outlineColor: string;

}

function t(a: [number, number][]) {
  let res: Record<string,string> = {}
  for (const [ki, vi] of a) {
    res[ks[ki] as string] = vs[vi] as string
  }
  return res as Theme
}
const vs = [
  'hsla(280, 34%, 62%, 1)',
  'hsla(243, 48%, 91%, 0)',
  'hsla(243, 48%, 91%, 0.25)',
  'hsla(243, 48%, 91%, 0.5)',
  'hsla(243, 48%, 91%, 0.75)',
  'hsla(243, 48%, 91%, 1)',
  'hsla(243, 48%, 88%, 1)',
  'hsla(243, 48%, 84%, 1)',
  'hsla(243, 48%, 81%, 1)',
  'hsla(243, 48%, 77%, 1)',
  'hsla(243, 48%, 74%, 1)',
  'hsla(243, 48%, 70%, 1)',
  'hsla(243, 48%, 67%, 1)',
  'hsla(243, 48%, 63%, 1)',
  'hsla(243, 48%, 60%, 1)',
  'hsla(243, 48%, 19%, 1)',
  'hsla(243, 48%, 9%, 1)',
  'hsla(243, 48%, 9%, 0)',
  'hsla(243, 48%, 9%, 0.25)',
  'hsla(243, 48%, 9%, 0.5)',
  'hsla(243, 48%, 9%, 0.75)',
  'hsla(243, 48%, 16%, 0)',
  'hsla(243, 48%, 16%, 0.25)',
  'hsla(243, 48%, 16%, 0.5)',
  'hsla(243, 48%, 16%, 0.75)',
  'hsla(243, 48%, 16%, 1)',
  'hsla(243, 48%, 21%, 1)',
  'hsla(243, 48%, 25%, 1)',
  'hsla(243, 48%, 30%, 1)',
  'hsla(243, 48%, 35%, 1)',
  'hsla(243, 48%, 40%, 1)',
  'hsla(243, 48%, 45%, 1)',
  'hsla(243, 48%, 50%, 1)',
  'hsla(243, 48%, 55%, 1)',
  'hsla(243, 48%, 93%, 1)',
  'hsla(281, 48%, 96%, 1)',
  'hsla(282, 50%, 96%, 0)',
  'hsla(282, 50%, 96%, 0.25)',
  'hsla(282, 50%, 96%, 0.5)',
  'hsla(282, 50%, 96%, 0.75)',
  'hsla(280, 34%, 60%, 0)',
  'hsla(280, 34%, 60%, 0.25)',
  'hsla(280, 34%, 60%, 0.5)',
  'hsla(280, 34%, 60%, 0.75)',
  'hsla(280, 34%, 60%, 1)',
  'hsla(280, 34%, 61%, 1)',
  'hsla(280, 34%, 63%, 1)',
  'hsla(280, 34%, 64%, 1)',
  'hsla(280, 34%, 65%, 1)',
  'hsla(243, 48%, 95%, 1)',
  'hsla(280, 34%, 76%, 0)',
  'hsla(280, 34%, 76%, 0.25)',
  'hsla(280, 34%, 76%, 0.5)',
  'hsla(280, 34%, 76%, 0.75)',
  'hsla(280, 34%, 76%, 1)',
  'hsla(280, 34%, 74%, 1)',
  'hsla(280, 34%, 72%, 1)',
  'hsla(280, 34%, 70%, 1)',
  'hsla(280, 34%, 69%, 1)',
  'hsla(280, 34%, 67%, 1)',
  'hsla(243, 48%, 90%, 1)',
  'hsla(245, 46%, 95%, 0)',
  'hsla(245, 46%, 95%, 0.25)',
  'hsla(245, 46%, 95%, 0.5)',
  'hsla(245, 46%, 95%, 0.75)',
  'rgba(0,0,0,0.5)',
  'rgba(0,0,0,0.8)',
]

const ks = [
'accentBackground',
'accentColor',
'background0',
'background025',
'background05',
'background075',
'color1',
'color2',
'color3',
'color4',
'color5',
'color6',
'color7',
'color8',
'color9',
'color10',
'color11',
'color12',
'color0',
'color025',
'color05',
'color075',
'background',
'backgroundHover',
'backgroundPress',
'backgroundFocus',
'borderColor',
'borderColorHover',
'borderColorPress',
'borderColorFocus',
'color',
'colorHover',
'colorPress',
'colorFocus',
'colorTransparent',
'placeholderColor',
'outlineColor']


const n1 = t([[0, 0],[1, 0],[2, 1],[3, 2],[4, 3],[5, 4],[6, 5],[7, 6],[8, 7],[9, 8],[10, 9],[11, 10],[12, 11],[13, 12],[14, 13],[15, 14],[16, 15],[17, 16],[18, 17],[19, 18],[20, 19],[21, 20],[22, 5],[23, 4],[24, 6],[25, 6],[26, 8],[27, 7],[28, 9],[29, 8],[30, 16],[31, 15],[32, 16],[33, 15],[34, 17],[35, 13],[36, 18]])

export const light = n1
const n2 = t([[0, 0],[1, 0],[2, 21],[3, 22],[4, 23],[5, 24],[6, 25],[7, 26],[8, 27],[9, 28],[10, 29],[11, 30],[12, 31],[13, 32],[14, 33],[15, 14],[16, 34],[17, 35],[18, 36],[19, 37],[20, 38],[21, 39],[22, 25],[23, 26],[24, 24],[25, 24],[26, 28],[27, 29],[28, 27],[29, 28],[30, 35],[31, 34],[32, 35],[33, 34],[34, 36],[35, 33],[36, 37]])

export const dark = n2
const n3 = t([[0, 8],[1, 8],[2, 40],[3, 41],[4, 42],[5, 43],[6, 44],[7, 44],[8, 45],[9, 0],[10, 0],[11, 46],[12, 46],[13, 47],[14, 47],[15, 48],[16, 49],[17, 25],[18, 21],[19, 22],[20, 23],[21, 24],[22, 44],[23, 43],[24, 44],[25, 44],[26, 0],[27, 45],[28, 0],[29, 0],[30, 25],[31, 49],[32, 25],[33, 49],[34, 21],[35, 47],[36, 22]])

export const light_accent = n3
const n4 = t([[0, 33],[1, 33],[2, 50],[3, 51],[4, 52],[5, 53],[6, 54],[7, 55],[8, 56],[9, 57],[10, 58],[11, 59],[12, 48],[13, 46],[14, 0],[15, 44],[16, 60],[17, 49],[18, 61],[19, 62],[20, 63],[21, 64],[22, 54],[23, 55],[24, 53],[25, 53],[26, 57],[27, 58],[28, 56],[29, 57],[30, 49],[31, 60],[32, 49],[33, 60],[34, 61],[35, 0],[36, 62]])

export const dark_accent = n4
const n5 = t([[30, 15],[31, 14],[32, 15],[33, 14]])

export const light_alt1 = n5
const n6 = t([[30, 14],[31, 13],[32, 14],[33, 13]])

export const light_alt2 = n6
const n7 = t([[22, 8],[23, 7],[24, 9],[25, 9],[26, 11],[27, 10],[29, 11],[28, 12]])

export const light_active = n7
export const light_surface3 = n7
export const light_Button = n7
export const light_SliderTrackActive = n7
const n8 = t([[22, 6],[23, 5],[24, 7],[25, 7],[26, 9],[27, 8],[29, 9],[28, 10]])

export const light_surface1 = n8
export const light_ListItem = n8
export const light_SelectTrigger = n8
export const light_Card = n8
export const light_Progress = n8
export const light_TooltipArrow = n8
export const light_SliderTrack = n8
export const light_Input = n8
export const light_TextArea = n8
const n9 = t([[22, 7],[23, 6],[24, 8],[25, 8],[26, 10],[27, 9],[29, 10],[28, 11]])

export const light_surface2 = n9
export const light_Checkbox = n9
export const light_Switch = n9
export const light_TooltipContent = n9
export const light_RadioGroupItem = n9
const n10 = t([[22, 10],[23, 10],[24, 11],[25, 11],[26, 10],[27, 10],[29, 11],[28, 11]])

export const light_surface4 = n10
const n11 = t([[30, 34],[31, 14],[32, 34],[33, 14]])

export const dark_alt1 = n11
const n12 = t([[30, 14],[31, 33],[32, 14],[33, 33]])

export const dark_alt2 = n12
const n13 = t([[22, 28],[23, 29],[24, 27],[25, 27],[26, 31],[27, 32],[29, 31],[28, 30]])

export const dark_active = n13
export const dark_surface3 = n13
export const dark_Button = n13
export const dark_SliderTrackActive = n13
const n14 = t([[22, 26],[23, 27],[24, 25],[25, 25],[26, 29],[27, 30],[29, 29],[28, 28]])

export const dark_surface1 = n14
export const dark_ListItem = n14
export const dark_SelectTrigger = n14
export const dark_Card = n14
export const dark_Progress = n14
export const dark_TooltipArrow = n14
export const dark_SliderTrack = n14
export const dark_Input = n14
export const dark_TextArea = n14
const n15 = t([[22, 27],[23, 28],[24, 26],[25, 26],[26, 30],[27, 31],[29, 30],[28, 29]])

export const dark_surface2 = n15
export const dark_Checkbox = n15
export const dark_Switch = n15
export const dark_TooltipContent = n15
export const dark_RadioGroupItem = n15
const n16 = t([[22, 30],[23, 30],[24, 29],[25, 29],[26, 30],[27, 30],[29, 29],[28, 29]])

export const dark_surface4 = n16
const n17 = t([[30, 49],[31, 48],[32, 49],[33, 48]])

export const light_accent_alt1 = n17
const n18 = t([[30, 48],[31, 47],[32, 48],[33, 47]])

export const light_accent_alt2 = n18
const n19 = t([[22, 0],[23, 45],[24, 0],[25, 0],[26, 46],[27, 46],[29, 46],[28, 47]])

export const light_accent_active = n19
export const light_accent_surface3 = n19
export const light_accent_Button = n19
export const light_accent_SliderTrackActive = n19
const n20 = t([[22, 44],[23, 44],[24, 45],[25, 45],[26, 0],[27, 0],[29, 0],[28, 46]])

export const light_accent_surface1 = n20
export const light_accent_ListItem = n20
export const light_accent_SelectTrigger = n20
export const light_accent_Card = n20
export const light_accent_Progress = n20
export const light_accent_TooltipArrow = n20
export const light_accent_SliderTrack = n20
export const light_accent_Input = n20
export const light_accent_TextArea = n20
const n21 = t([[22, 45],[23, 44],[24, 0],[25, 0],[26, 46],[27, 0],[29, 46],[28, 46]])

export const light_accent_surface2 = n21
export const light_accent_Checkbox = n21
export const light_accent_Switch = n21
export const light_accent_TooltipContent = n21
export const light_accent_RadioGroupItem = n21
const n22 = t([[22, 46],[23, 46],[24, 46],[25, 46],[26, 46],[27, 46],[29, 46],[28, 46]])

export const light_accent_surface4 = n22
const n23 = t([[30, 60],[31, 44],[32, 60],[33, 44]])

export const dark_accent_alt1 = n23
const n24 = t([[30, 44],[31, 0],[32, 44],[33, 0]])

export const dark_accent_alt2 = n24
const n25 = t([[22, 57],[23, 58],[24, 56],[25, 56],[26, 48],[27, 46],[29, 48],[28, 59]])

export const dark_accent_active = n25
export const dark_accent_surface3 = n25
export const dark_accent_Button = n25
export const dark_accent_SliderTrackActive = n25
const n26 = t([[22, 55],[23, 56],[24, 54],[25, 54],[26, 58],[27, 59],[29, 58],[28, 57]])

export const dark_accent_surface1 = n26
export const dark_accent_ListItem = n26
export const dark_accent_SelectTrigger = n26
export const dark_accent_Card = n26
export const dark_accent_Progress = n26
export const dark_accent_TooltipArrow = n26
export const dark_accent_SliderTrack = n26
export const dark_accent_Input = n26
export const dark_accent_TextArea = n26
const n27 = t([[22, 56],[23, 57],[24, 55],[25, 55],[26, 59],[27, 48],[29, 59],[28, 58]])

export const dark_accent_surface2 = n27
export const dark_accent_Checkbox = n27
export const dark_accent_Switch = n27
export const dark_accent_TooltipContent = n27
export const dark_accent_RadioGroupItem = n27
const n28 = t([[22, 59],[23, 59],[24, 58],[25, 58],[26, 59],[27, 59],[29, 58],[28, 58]])

export const dark_accent_surface4 = n28
const n29 = t([[30, 6],[31, 5],[32, 7],[33, 7],[22, 16],[23, 15],[24, 16],[25, 15],[26, 14],[27, 13],[29, 12],[28, 11]])

export const light_SwitchThumb = n29
export const light_SliderThumb = n29
export const light_Tooltip = n29
export const light_ProgressIndicator = n29
const n30 = t([[22, 65]])

export const light_SheetOverlay = n30
export const light_DialogOverlay = n30
export const light_ModalOverlay = n30
export const light_accent_SheetOverlay = n30
export const light_accent_DialogOverlay = n30
export const light_accent_ModalOverlay = n30
const n31 = t([[30, 26],[31, 27],[32, 25],[33, 25],[22, 35],[23, 34],[24, 35],[25, 34],[26, 14],[27, 33],[29, 32],[28, 31]])

export const dark_SwitchThumb = n31
export const dark_SliderThumb = n31
export const dark_Tooltip = n31
export const dark_ProgressIndicator = n31
const n32 = t([[22, 66]])

export const dark_SheetOverlay = n32
export const dark_DialogOverlay = n32
export const dark_ModalOverlay = n32
export const dark_accent_SheetOverlay = n32
export const dark_accent_DialogOverlay = n32
export const dark_accent_ModalOverlay = n32
const n33 = t([[30, 44],[31, 44],[32, 45],[33, 45],[22, 25],[23, 49],[24, 25],[25, 49],[26, 48],[27, 47],[29, 47],[28, 46]])

export const light_accent_SwitchThumb = n33
export const light_accent_SliderThumb = n33
export const light_accent_Tooltip = n33
export const light_accent_ProgressIndicator = n33
const n34 = t([[30, 55],[31, 56],[32, 54],[33, 54],[22, 49],[23, 60],[24, 49],[25, 60],[26, 44],[27, 0],[29, 46],[28, 48]])

export const dark_accent_SwitchThumb = n34
export const dark_accent_SliderThumb = n34
export const dark_accent_Tooltip = n34
export const dark_accent_ProgressIndicator = n34