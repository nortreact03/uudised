import { useParams } from "react-router-dom"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const renderOption = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        return (<img
          src={`https:${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt="??"
        />)
      }
    }
  }
 

function Post({postitused}) {
    const { postId } = useParams()
    if (!postitused || postitused.length < 1) {
        return <div>Laeme andmeid ...</div>
    }

    console.log('postitused');
    console.log(postitused);
    const postData = postitused.find(post => post.id === postId)

    if (!postData) {
        return <div>Viga</div>
    }

    console.log('postitused');
    console.log(postitused);
    console.log('postitus');
    console.log(postData);
    return (
        <div>
        <h1>{postData.title}</h1>
        <img src={postData.headerImage}/>
        <div>{documentToReactComponents(postData.content, renderOption)}</div>
        </div>
    )
}

export default Post