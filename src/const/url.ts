import qs from 'query-string';
import urlJoin from 'url-join';

import { withBasePath } from '@/utils/basePath';

import pkg from '../../package.json';
import { INBOX_SESSION_ID } from './session';

export const OFFICIAL_URL = 'https://chat-aipm.theforage.cn/';
export const OFFICIAL_SITE = 'https://theforage.cn/';

export const getCanonicalUrl = (path: string) => urlJoin(OFFICIAL_URL, path);

export const GITHUB = pkg.homepage;
export const GITHUB_ISSUES = urlJoin(GITHUB, 'issues/new/choose');
export const CHANGELOG = urlJoin(GITHUB, 'blob/main/CHANGELOG.md');
export const DOCKER_IMAGE = 'https://hub.docker.com/r/lobehub/lobe-chat';

export const DOCUMENTS = urlJoin(OFFICIAL_SITE, '/docs');
export const USAGE_DOCUMENTS = urlJoin(DOCUMENTS, '/usage');
export const SELF_HOSTING_DOCUMENTS = urlJoin(DOCUMENTS, '/self-hosting');

export const WIKI = urlJoin(GITHUB, 'wiki');
export const WIKI_PLUGIN_GUIDE = urlJoin(USAGE_DOCUMENTS, '/plugins/development');
export const MANUAL_UPGRADE_URL = urlJoin(SELF_HOSTING_DOCUMENTS, '/advanced/upstream-sync');

export const BLOG = urlJoin(OFFICIAL_SITE, 'blog');

export const ABOUT = OFFICIAL_SITE;
export const FEEDBACK = pkg.bugs.url;
export const DISCORD = 'https://discord.gg/sYB5zSyD';
export const PRIVACY_URL = urlJoin(OFFICIAL_SITE, '/privacy');
export const TERMS_URL = urlJoin(OFFICIAL_SITE, '/terms');

export const PLUGINS_INDEX_URL = 'https://chat-plugins.theforage.cn';

export const MORE_MODEL_PROVIDER_REQUEST_URL =
  'https://github.com/aipmhub/aipm-chat/discussions/1284';

export const AGENTS_INDEX_GITHUB = 'https://github.com/aipmhub/aipm-chat-agents';
export const AGENTS_INDEX_GITHUB_ISSUE = urlJoin(AGENTS_INDEX_GITHUB, 'issues/new');

export const SESSION_CHAT_URL = (id: string = INBOX_SESSION_ID, mobile?: boolean) =>
  qs.stringifyUrl({
    query: mobile ? { session: id, showMobileWorkspace: mobile } : { session: id },
    url: '/chat',
  });

export const imageUrl = (filename: string) => withBasePath(`/images/${filename}`);

export const LOBE_URL_IMPORT_NAME = 'settings';
export const EMAIL_SUPPORT = 'nextprofessionalpower@gmail.com';
export const EMAIL_BUSINESS = 'ai.flyingwheel@gmail.com';

export const MEDIDUM = 'https://medium.com/@aipmhub';
export const X = 'https://x.com/aipmhub';
export const RELEASES_URL = urlJoin(GITHUB, 'releases');

export const mailTo = (email: string) => `mailto:${email}`;
