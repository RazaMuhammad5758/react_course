import React from 'react'
import './DiseaseDet.css'

const DiseaseDet = () => {
  return (
    <div>
      <div className="disease">
        <h1>Disease Detection</h1>
        <div className="dis-images">
          <div className="dis-1">
            <img src="/public/Pics/1.jpg" alt="" />
            <h3>Original </h3>
          </div>
          <div className="dis-2">
            <img src="/public/Pics/2.jpg" alt="" />
            <h3>Processed </h3>
          </div>
        </div>

        <table>
        <h3>Detection Result:</h3>
    <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
    </tr>
    <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
        <td>Row 1, Cell 3</td>
    </tr>
    <tr>
        <td>Row 2, Cell 1</td>
        <td>Row 2, Cell 2</td>
        <td>Row 2, Cell 3</td>
    </tr>
    <tr>
        <td>Row 3, Cell 1</td>
        <td>Row 3, Cell 2</td>
        <td>Row 3, Cell 3</td>
    </tr>
    <tr>
        <td>Row 4, Cell 1</td>
        <td>Row 4, Cell 2</td>
        <td>Row 4, Cell 3</td>
    </tr>
    <tr>
        <td>Row 5, Cell 1</td>
        <td>Row 5, Cell 2</td>
        <td>Row 5, Cell 3</td>
    </tr>
    <tr>
        <td>Row 6, Cell 1</td>
        <td>Row 6, Cell 2</td>
        <td>Row 6, Cell 3</td>
    </tr>
</table>
      <div className="instructions">
        <h3>Care Instructions:</h3>
        <p>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, optio dolorum. Ipsum ea minima accusantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt voluptate et sequi eos itaque..</p>
        <p>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, optio dolorum. Ipsum ea minima accusantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt voluptate et sequi eos itaque..</p>
        <p className='para-3'>3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, optio dolorum. Ipsum ea minima accusantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt voluptate et sequi eos itaque..</p>
      </div>
      </div>
    </div>
  )
}

export default DiseaseDet
