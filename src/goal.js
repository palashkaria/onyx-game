import Body from './body.js'
import create from './create.js'

export default class Goal extends Body {
  constructor (x, y) {
    super(create('svg'))
    this.element.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20">
  <g id="burger-goal" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
    <g id="Burger" fill-rule="nonzero">
      <g id="Top_Bun">
        <path id="TopBase" fill="#D5752C" d="M0 3.636h.917V1.818H2.75V.909H5.5V0h11v.909h2.75v.909h1.833v1.818H22v3.637H0z"/>
        <path id="TopOv1" fill="#FFF" d="M0 3.636h.917V1.818H2.75V.909H5.5V0h11v.909h2.75v.909h1.833v1.818H22v3.637H0z" opacity=".2"/>
        <path id="TopOv2" fill="#FFF" d="M0 3.636h3.667v.909h14.666v-.909H22h-.917V1.818H19.25V.909H16.5V0h-11v.909H2.75v.909H.917v1.818z" opacity=".2"/>
        <path id="TopOv3" fill="#FFF" d="M2.75.909v.909h1.833v.909h12.834v-.909h1.833V.909H16.5V0h-11v.909z" opacity=".2"/>
        <path id="Spots" fill="#FFF" d="M19.25 2.727h.917v.91h-.917v-.91zm-3.208.91h.916v.908h-.916v-.909zm-7.334.908h.917v.91h-.917v-.91zm-2.75-2.727h.917v.91h-.917v-.91zm6.417 0h.917v.91h-.917v-.91zM1.833 3.636h.917v.91h-.917v-.91z" opacity=".6"/>
      </g>
      <g id="Filling" transform="translate(0 7.273)">
        <g id="BottomPatty" transform="translate(0 5.455)">
          <path id="Rectangle" fill="#D5752C" d="M.917 0h20.166v.909H22v1.818h-.917v.909H.917v-.909H0V.909h.917z"/>
          <path id="Rectangle" fill="#110D0A" d="M.917 0h20.166v.909H22v1.818h-.917v.909H.917v-.909H0V.909h.917z" opacity=".5"/>
          <path id="Spots" fill="#110D0A" d="M19.25.91h.917v.908h-.917V.91zm-5.042.908h.917v.91h-.917v-.91zM9.625.91h.917v.91h-.917v-.91zm-7.792.91h.917v.908h-.917v-.909z" opacity=".5"/>
        </g>
        <g id="Sauce" transform="translate(.917 3.636)">
          <path id="Rectangle" fill="#D5752C" d="M0 0h20.167v1.818H0z"/>
          <path id="Rectangle" fill="#110D0A" d="M0 0h20.167v1.818H0z" opacity=".8"/>
        </g>
        <g id="TopPatty">
          <path id="Rectangle" fill="#D5752C" d="M.917 0h20.166v.909H22v1.818h-.917v.909H.917v-.909H0V.909h.917z"/>
          <path id="Rectangle" fill="#110D0A" d="M.917 0h20.166v.909H22v1.818h-.917v.909H.917v-.909H0V.909h.917z" opacity=".5"/>
          <path id="Spots" fill="#110D0A" d="M2.75.91h.917v.908H2.75V.91zm4.125.908h.917v.91h-.917v-.91zm8.25-.909h.917v.91h-.917v-.91zm4.125.91h.917v.908h-.917v-.909z" opacity=".5"/>
        </g>
        <g id="TopCheese" transform="translate(5.042 3.636)">
          <path id="Rectangle" fill="#D5752C" d="M0 0h7.333v.909H5.5v.909H3.667v.909H1.833v-.909H.917V.909H0z"/>
          <path id="Rectangle" fill="#FFF" d="M0 0h7.333v.909H5.5v.909H3.667v.909H1.833v-.909H.917V.909H0z" opacity=".5"/>
        </g>
      </g>
      <g id="BottomBun" transform="translate(0 16.364)">
        <path id="BottomBase" fill="#D5752C" d="M0 0h22v1.818h-.917v.909H19.25v.909H2.75v-.909H.917v-.909H0z"/>
        <path id="BottomOv1" fill="#FFF" d="M0 0h22v1.818h-.917v.909H19.25v.909H2.75v-.909H.917v-.909H0z" opacity=".2"/>
        <path id="BottomOv2" fill="#FFF" d="M.917 0H0v1.818h.917v.909H2.75v.909h16.5v-.909h1.833v-.909H22V0h-.917v.909H19.25v.909H2.75V.909H.917z" opacity=".2"/>
      </g>
    </g>
  </g>
</svg>
`
    this.width = 22
    this.height = 20
    this.load(x, y)
  }

  load (x, y) {
    this.x = x
    this.y = y
  }

  toJSON () {
    return [Math.round(this.x), Math.round(this.y)]
  }
}
