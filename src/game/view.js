import GamePage from '../pages/game-page'
import GameOverPage from '../pages/game-over-page'
class GameView{
  constructor(){
    
  }
  showGameOverPage(){
   
  }

  showGamePage(){
    
  }

  restartGame(){
    
  }
  initGameOverPage(callbacks){
    this.gameOverPage = new GameOverPage(callbacks)
    
    this.gameOverPage.init({
      scene: this.gamePage.scene.instance
    })
  }

  initGamePage(callbacks){
    this.gamePage = new GamePage(callbacks)
    this.gamePage.init()
    // console.log(',')
  }

}

export default new GameView();