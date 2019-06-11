
import 'coglite/styles.css'
import {render} from 'react-dom'
import {registerServiceWorker} from 'coglite/utilities'
import { App } from 'coglite/App';


render(<App />, document.getElementById('root'))
registerServiceWorker()
