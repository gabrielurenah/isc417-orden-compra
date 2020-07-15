import Article from './model';
import wrapper from '../../utils/async';

const list = async (req, res) => {
  const [err, articles] = await wrapper(Article.find({}));

  return err ? res.status(500).send(err) : res.status(200).json(articles);
};

export { list };
