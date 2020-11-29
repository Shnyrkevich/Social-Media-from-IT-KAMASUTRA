import React from 'react';
import './posts.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthValidate, required } from '../../../utils/validators/validators';
import { SomeTextarea } from '../../form-controller/form-controller';

const maxLengthValidate15 = maxLengthValidate(15);

const CreateNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="posts-container_new-post">
      <div className='posts-new_post'>
        <Field
          name='postTextarea'
          className='new_post-text'
          placeholder='Input Something'
          component={SomeTextarea('textarea')}
          validate={[maxLengthValidate15, required]}
        /> 
        <div className='btn-container'>
          <button
            type='submit'
            className='new-post-btn add_new_post-btn'
          >
            Add Post
          </button>
        </div>
      </div>
    </form>
  );
} 

const CreateNewPostFormWithRedux = reduxForm({form: 'create_new_post'})(CreateNewPostForm);

function Posts(props) {
  function addNewPostButtonListener(formData) {
    if ( formData.postTextarea ) {
      console.log(formData);
       props.addNewPost(formData.postTextarea);
     }
  }
  
  let postsArray = props.posts.map((el) => <Post post={el.text} key={el.id}/>);

  return (
    <div className='posts-container'>
        Posts
        <CreateNewPostFormWithRedux onSubmit={addNewPostButtonListener} />
        <div className='posts'>
          { postsArray }
        </div>
    </div>
  );
}

export default Posts;