/*  
1.duration
2.from
3.to
4.type
*/

import Tween from './tween'

const customAnimation = {
  to: function(){}
}
customAnimation.to = function (duration, from, to, type){
  for(let prop in to) {
    if(to.hasOwnProperty(prop)) {
      TweenAnimation(from[prop], to[prop], duration, type,(value,complete)=>{
        from[prop] = value
      })
    }
  }
}
function TweenAnimation(from, to, duration, type,callback) {
  
  const frameCount = duration*1000/17

  let start  = -1
  const startTime = Date.now()
  let lastTime = Date.now()

  const tweenFn = Tween[type]

  const options = {
    callback: function (){},
    type:'Linear',
    duration:300
  }
  if(callback){
    options.callback = callback
  }
  if(type){
    options.type = type
  }
  if(duration){
    options.duration = duration
  }
  function step () {
    let fps; // 调整帧率
    const currentTime = Date.now()
    const interval = currentTime - lastTime
    if(interval){
      fps = Math.ceil(1000/interval)
    }else{
      requestAnimationFrame(step)
      return
    }
    if(fps>=30){
      start++;
    }else{
      start+=Math.floor(interval/17);
    }

    const value = tweenFn(start,from, to-from, frameCount)

    if(start <= frameCount){
      // 动画继续
      options.callback(value)
      
      requestAnimationFrame(step)

    }
    else{
      // 动画结束
      options.callback(to,true)
    }
    lastTime = Date.now()
  }
  step()
}

export {
  customAnimation,
  TweenAnimation
}