
let style = document.createElement("style")
document.head.appendChild(style)
let sheet = style.sheet

sheet.insertRule(`body { font-family: arial; margins: 30px; padding: 10px; height: 100%; margin: 0 }`)
sheet.insertRule(`.flat { border: 0; outline-width: 0; margins: 0; padding: 0 }`)
sheet.insertRule(`.fill { height:100%; width: 100% }`)
sheet.insertRule(`.border { border: 3px solid blue }`)
sheet.insertRule(`.fadein { text-align: center;-webkit-animation: fadein 3s; -moz-animation: fadein 3s; -ms-animation: fadein 3s; -o-animation: fadein 3s; animation: fadein 3s }`)
sheet.insertRule(`@keyframes fadein { from { opacity: 0; } to { opacity: 1; } }`)
sheet.insertRule(`a { text-decoration:none !important }`)
sheet.insertRule(`.shadow { box-shadow: 6px 6px 6px #dbdbdb }`)
sheet.insertRule(`.pointer { cursor: pointer }`)
sheet.insertRule(`.arrow { cursor: default }`)

sheet.insertRule(`.navy { color: #001f3f }`)
sheet.insertRule(`.blue { color: #0074d9 }`)
sheet.insertRule(`.green { color: #2ecc40 }`)
sheet.insertRule(`.yellow { color: #ffdc00 }`)
sheet.insertRule(`.orange { color: #ff851b }`)
sheet.insertRule(`.red { color: #ff4136 }`)
sheet.insertRule(`.purple { color: #b10dc9 }`)
sheet.insertRule(`.white { color: #fff }`)
sheet.insertRule(`.gray { color: #aaa }`)
sheet.insertRule(`.silver { color: #ddd }`)
sheet.insertRule(`.black { color: #111 }`)
sheet.insertRule(`.ltgray { color: #fcfcfc }`)

sheet.insertRule(`.bg-navy { background-color: #001f3f }`)
sheet.insertRule(`.bg-blue { background-color: #0074d9 }`)
sheet.insertRule(`.bg-green { background-color: #2ecc40 }`)
sheet.insertRule(`.bg-yellow { background-color: #ffdc00 }`)
sheet.insertRule(`.bg-orange { background-color: #ff851b }`)
sheet.insertRule(`.bg-red { background-color: #ff4136 }`)
sheet.insertRule(`.bg-purple { background-color: #b10dc9 }`)
sheet.insertRule(`.bg-white { background-color: #fff }`)
sheet.insertRule(`.bg-gray { background-color: #aaa }`)
sheet.insertRule(`.bg-silver { background-color: #ddd }`)
sheet.insertRule(`.bg-black { background-color: #111 }`)
sheet.insertRule(`.bg-ltgray { background-color: #fcfcfc }`)

sheet.insertRule(`.center { margin: 0 auto;  text-align: center }`)
sheet.insertRule(`.margins { margin: 15px }`)
sheet.insertRule(`.padding { padding: 15px }`)
sheet.insertRule(`.front { z-index: 100 }`)
sheet.insertRule(`.left { text-align: left }`)
sheet.insertRule(`.right { text-align: right }`)

sheet.insertRule('img { max-width: 100%;  height: auto }')

sheet.insertRule(`.ten { font-size: 10px }`)
sheet.insertRule(`.twelve { font-size: 12px }`)
sheet.insertRule(`.twenty {  font-size: 20px }`)
sheet.insertRule(`.thirty {  font-size: 30px }`)
sheet.insertRule(`.forty {  font-size: 40px }`)
sheet.insertRule(`.fifty {  font-size: 50px }`)
sheet.insertRule(`.sixty {  font-size: 60px }`)
sheet.insertRule(`.seventy {  font-size: 70px }`)
sheet.insertRule(`.eighty {  font-size: 80px }`)
sheet.insertRule(`.ninety {  font-size: 90px }`)
sheet.insertRule(`.hundred {  font-size: 100px }`)

sheet.insertRule(`.fixed {  position: fixed }`)
sheet.insertRule(`.center-screen {  position: fixed; top: 30%; left: 40% }`)

sheet.insertRule(`.gone {  display: none }`)
sheet.insertRule(`.faded {  opacity: 0.5 }`)
sheet.insertRule(`.hide { opacity: 0; transition: opacity .25s ease-in-out; -moz-transition: opacity .25s ease-in-out; -webkit-transition: opacity .25s ease-in-out }`)
sheet.insertRule(`.show { opacity: 1; transition: opacity .25s ease-in-out; -moz-transition: opacity .25s ease-in-out; -webkit-transition: opacity .25s ease-in-out }`)
sheet.insertRule(`.rounded { -moz-border-radius: 10px; -webkit-border-radius: 10px; border-radius: 10px; -khtml-border-radius: 10px }`)
sheet.insertRule(`.blur { filter: blur(5px); -webkit-filter: blur(5px); transition:0.2s }`)
sheet.insertRule(`.unblur { filter: blur(0px); -webkit-filter: blur(0px); transition:0.2s }`)

sheet.insertRule('.one-column { column-count: 1; column-gap: 40px }')
sheet.insertRule('.two-column { column-count: 2; column-gap: 40px }')
sheet.insertRule('.three-column { column-count: 3; column-gap: 40px }')
sheet.insertRule('.four-column { column-count: 4; column-gap: 40px }')
sheet.insertRule('.five-column { column-count: 5; column-gap: 40px }')
sheet.insertRule('.six-column { column-count: 6; column-gap: 40px }')

sheet.insertRule('.one-wide { width: 200px }')

sheet.insertRule('.separator { column-rule: 1px solid powderblue }')
sheet.insertRule('.left { text-align: left }')
sheet.insertRule('.right { text-align: right }')

sheet.insertRule('section { display: flex; justify-content: space-between; flex: 1 }')
sheet.insertRule('.flex-right { justify-content: flex-end }')

sheet.insertRule('input { height: 30px; border: 1px solid #dbdbdb }')

window.$ = document.querySelectorAll.bind(document)

window.load = async (url, type = '') => {
    return new Promise(async r => {

      if(url.match(/css$/) || type == 'css'){
        var e = document.createElement('link')
        e.rel = 'stylesheet'
        e.href = url
        document.body.appendChild(e)
        e.onload = r
      } else if(url.match(/js$/)){

        for(var i=0;i<document.scripts.length;i++)
          if(document.scripts[i].src == s) return r()

        var e = document.createElement('script')
        e.src = s
        document.body.appendChild(e)
        e.onload = r
      } else {
        
        let r = await fetch(url)
        let d = await r.json()
        for(k in d) data[k] = d[k]
      }
    })
}

window.data = new Proxy({}, {
    set: (obj, prop, value) => {

      prop = prop.replace('$', '')

      console.warn('data.' + prop + ' = ' + JSON.stringify(value))
      obj[prop] = value

      const controls = $(`[data^=${prop}]`)

      //if(!controls.length) return console.warn('did not find controls for ' + `[data^=${prop}]`)
      //console.warn('found controls ' + controls)

      controls.forEach(control => {
         control.set ? control.set(value) : control.innerHTML = value
      })
      return prop

    }
})

window.controls = window.controls || {}
window.controls.helloworld = e => {
  e.set = name =>
    e.innerHTML = `Hello ${name}`
}

window.controls.view = e => {

    e.show = () => {
      $('view').forEach(v => {
          v.classList.remove('show')
          v.classList.add('hide')
          v.classList.add('fixed')
      })
      e.classList.remove('gone')
      e.classList.remove('hide')
      e.classList.add('show')
    }

    if(!window.viewstate){
      e.show()
      window.viewstate = []
    }

}

window.controls.modal = e => {
  var modal = document.body.child('pre')
  modal.id = 'dataviewer'
  modal.classList.add('center-screen')
  modal.classList.add('arrow')

  modal.onclick = (ev) => {
    $('section').forEach((section)=>section.classList.remove('blur'))
    modal.classList.add('hide')
  }

  e.classList.add('arrow')
  e.onclick = (ev) => {
    modal.classList.remove('hide')
    $('section').forEach((section)=>section.classList.add('blur'))
    modal.innerHTML = eval(e.getAttribute('render'))
  }
}

window.controls.icon = async function(e){
  await load('https://fonts.googleapis.com/icon?family=Material+Icons', 'css')
  e.innerHTML = `<span class="material-icons">${e.getAttribute('kind')}</span>`    
}
window.controls.mapembed = e =>
  e.innerHTML = `<iframe frameborder=0 src="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=${e.getAttribute('where')||'Chicago'}&output=embed"></iframe>` 


window.classes = window.classes || {}
classes.print = e => {
  e.addEventListener('click', x => print())
  e.css('cursor:default')
}

window.enigmatic = async x => {

  let controls = $('*')

  for(let i=0; i<controls.length; i++){

    let e = controls[i], tag = e.tagName.toLowerCase()

    if(!e.id)
      e.id = Math.random().toString(36).substring(2, 15).replace(/\d/g, '')

    e.child = type => {
      return e.appendChild(window.document.createElement(type||'div'))
    }

    e.css = (rules) => {
      if(typeof rules == 'object'){
        rules.forEach(()=>e.classList.add(a))
      }
      document.styleSheets[0].insertRule(`#${e.id} {${rules}}`)
    }

    if(tag in window.controls){
      //console.warn(tag, e)
      await window.controls[tag](e)
    }

    e.classList.forEach(async name => {
      if(window.classes[name])
        await window.classes[name](e)
    })

    eReady()
  }

  let dataurl2 = $('meta[data]')
  dataurl2.forEach((m) => {
    var e = {}
    e.baseUri = m.getAttribute('data')
    e.do = async (method, uri = '') => {
      let r = await fetch(e.baseUri + uri, {method: method, data: JSON.stringify(data), headers: {'Content-Type': 'application/json'}})
      let ret = await r.json()
      for(i in ret) data[i] = ret[i]
      return ret
    }

    var events = m.getAttribute('events')
    if(events){
      var evs = new EventSource(e.baseUri + events)
      evs.onmessage = (msg) => {
        for(i in ret) data[i] = ret[i]
      }
    }
    m.getAttribute('name') ? window[m.getAttribute('name')] = e : e.do()
  })

  console.warn(`enigmatic runtime ${new Date().toISOString()}`)

}

window.enigmatic.version = 'v0.9.0'
document.addEventListener('DOMContentLoaded', window.enigmatic)
