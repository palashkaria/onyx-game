   import {leftKey, rightKey} from './keys.js'
import Body from './body.js'
import create from './create.js'

export default class Guy extends Body {
  constructor (x, y) {
    super(create('svg'))
    this.element.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="48" viewBox="0 0 55 48">
  <g id="onyx-warp" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
    <g id="Artboard" fill-rule="nonzero">
      <g id="Onyx">
        <g id="Legs2">
          <g id="Leg_F2">
            <path id="LegF2" fill="#110D0A" d="M42.137 32.889h6.653v5.495h-1.331v2.747h-1.33V48h-2.662v-9.616h-1.33z"/>
            <path id="PawF2" fill="#D5752C" d="M47.459 45.253h-1.33v-1.374h-1.331v-1.374h-1.331V48h3.992z"/>
          </g>
          <g id="Leg_B2" fill="#D5752C">
            <path id="LegB2" d="M19.516 37.01h-1.331v1.374h-1.331V48h2.662v-5.495h3.992v-1.374h1.33v-1.373h1.331v-6.869h-6.653z"/>
            <path id="PawB2" d="M20.846 45.253h-1.33v-2.748h-1.331v1.374h-1.331V48h3.992z"/>
          </g>
        </g>
        <g id="Legs1">
          <g id="Leg_F1">
            <path id="LegF1" fill="#110D0A" d="M38.145 32.889h-6.653v6.869h1.33v2.747h1.331V48h2.661v-9.616h1.331z"/>
            <path id="PawF1" fill="#D5752C" d="M38.145 45.253h-1.331v-2.748h-1.33v1.374h-1.331V48h3.992z"/>
          </g>
          <g id="Leg_B1">
            <path id="LegB1" fill="#110D0A" d="M8.87 37.01H7.54v1.374H6.209V48H8.87v-5.495h5.323v-1.374h1.331v-1.373h1.33V37.01h1.331v-4.121H8.87z"/>
            <path id="PawB1" fill="#D5752C" d="M10.201 45.253H8.87v-2.748H7.54v1.374H6.209V48h3.992z"/>
          </g>
        </g>
        <g id="Torso">
          <g id="Tails" fill="#110D0A">
            <path id="Tail1" d="M6.258 17.451v3.391H7.6v1.357h1.343v1.357h1.343v1.357h2.685v-4.749h-1.343v-2.713h-1.342v-1.357H8.943v-1.357H7.6v-4.07H6.258v1.357H4.915v5.427z"/>
            <path id="Tail2" d="M2.23 18.129v1.357h1.343v1.356h2.685v1.357H7.6v1.357h5.371v-3.392h-2.685v-1.357H8.943v-1.356H7.6v-1.357H4.915v-1.357H3.573v-2.713H2.23v1.356H.887v4.749z"/>
          </g>
          <path id="Torso_Base" fill="#110D0A" d="M50.565 18.807H12.971v1.357h-1.342v1.357h-1.343v1.357H8.943v10.853h14.769v1.357h2.686v1.357h24.167z"/>
          <g id="Mark" fill="#D5752C">
            <path id="Mark1" d="M48.551 28.983h-4.027v1.357h-1.343v4.07h1.343v-1.357h1.342v-1.357h1.343V30.34h1.342z"/>
            <path id="Mark2" d="M39.153 30.34H37.81v-1.357h-4.027v1.357h1.342v1.356h1.343v1.357h1.342v1.357h1.343z"/>
          </g>
        </g>
        <g id="Face">
          <g id="Head">
            <path id="Head_Base" fill="#110D0A" d="M51.646 2.691h-1.341V1.345h-2.683V0H34.207v1.345h-2.683v1.346h-1.341v1.345h-1.342v1.345H27.5v8.072h1.341v1.346h1.342v1.345h-1.342v1.345H27.5v2.691h24.146z"/>
            <path id="Head_Ear" fill="#FFF" d="M32.866 6.727h-1.342v4.036h-1.341v4.036h1.341v-4.036h1.342z" opacity=".5"/>
          </g>
          <g id="Muzzle">
            <path id="Muzzle_Base" fill="#D5752C" d="M53.659 9.417H41.585v1.345h-1.341v1.346h-1.342v1.345h-1.341v5.381h1.341v1.346h1.342v3.363h1.341v1.345h6.037v-1.345h1.341V20.18h2.683v-1.346h2.013v-1.345H55v-6.727h-1.341z"/>
            <path id="Muzzle_Lips" fill="#110D0A" d="M49.634 17.489h-9.39v1.345h9.39v-1.345h1.342v1.345h2.683v-1.345h-2.683v-2.691h-1.342z" opacity=".5"/>
            <path id="Muzzle_Chin" fill="#110D0A" d="M48.963 20.18h-8.72v1.345h8.72z" opacity=".3"/>
            <path id="Muzzle_Nose" fill="#110D0A" d="M46.951 12.108v1.345h1.342v1.345h2.683v-1.345h1.341v-2.691H45.61v1.346z"/>
          </g>
          <g id="Eyes">
            <path id="Eyes_Base" fill="#FFF" d="M50.305 6.726h-2.683v2.691h2.683v-2.69zm-9.39 0h-2.683v2.691h2.683v-2.69z"/>
            <path id="Eyes_Iris" fill="#110D0A" d="M49.635 7.399h-1.342v1.347h1.341V7.399zm-9.391 0h-1.341v1.347h1.341V7.399z"/>
            <path id="Brows" fill="#D5752C" d="M49.635 4.036h-2.684v1.345h2.684V4.036zm-8.05 0h-2.682v1.345h2.682V4.036z"/>
          </g>
        </g>
      </g>
    </g>
  </g>
</svg>

`
    this.load(x, y)
    this.height = 48
    this.width = 55
    this.speed = 360
    this.vx = 0
    this.vy = 0
  }

  tick (scale) {
    if (leftKey() && !rightKey()) {
      this.vx = -scale(this.speed)
      this.faceLeft = true
    } else if (rightKey() && !leftKey()) {
      this.vx = scale(this.speed)
      this.faceLeft = false
    } else {
      this.vx = 0
    }

    this.walking = leftKey() || rightKey()
  }

  get faceLeft () {
    return !!this._faceLeft
  }

  set faceLeft (value) {
    this._faceLeft = !!value
    this.element.classList.toggle('left', this.faceLeft)
  }

  get walking () {
    return !!this._walking
  }

  set walking (value) {
    this._walking = !!value
    this.element.classList.toggle('walk', this.walking)
  }

  load (x, y) {
    this.x = x
    this.y = y
  }

  toJSON () {
    return [Math.round(this.x), Math.round(this.y)]
  }
}
