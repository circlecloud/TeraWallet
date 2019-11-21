import Taro from '@tarojs/taro';

function sharePage(opts: any = {}) {

  // 设置默认
  const defalutPath = 'pages/index/index?';
  const defalutTitle = '';

  return function demoComponent(Component) {
    class SharePage extends Component {
      async componentWillMount() {
        Taro.showShareMenu({
          withShareTicket: true
        })
        if (super.componentWillMount) {
          super.componentWillMount();
        }
      }

      // 点击分享的那一刻会进行调用
      onShareAppMessage() {
        // const { userInfo } = this.props;

        let { title, imageUrl, path = null } = opts;

        // 从继承的组件获取配置
        if (this.$setSharePath && typeof this.$setSharePath === 'function') {
          path = this.$setSharePath();
        }

        // 从继承的组件获取配置
        if (this.$setShareTitle && typeof this.$setShareTitle === 'function') {
          title = this.$setShareTitle();
        }

        // 从继承的组件获取配置
        if (
          this.$setShareImageUrl &&
          typeof this.$setShareImageUrl === 'function'
        ) {
          imageUrl = this.$setShareImageUrl();
        }

        if (!path) {
          path = defalutPath;
        }

        // 每条分享都补充用户的分享id
        // 如果path不带参数，分享出去后解析的params里面会带一个{''： ''}
        const sharePath = `${path}`;//&shareFromUser=${userInfo.shareId}

        return {
          title: title || defalutTitle,
          path: sharePath,
          imageUrl: imageUrl
        };
      }

      render() {
        return super.render();
      }
    }

    return SharePage;
  };
}

export default sharePage;
