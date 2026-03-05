// src/services/discourseApi.ts

// Interface para um Tópico do Discourse
export interface DiscourseTopic {
  id: number;
  title: string;
  slug: string;
  posts_count: number;
  reply_count: number;
  highest_post_number: number;
  image_url: string | null;
  created_at: string;
  last_posted_at: string;
  bumped: boolean;
  bumped_at: string;
  archetype: string;
  unseen: boolean;
  pinned: boolean;
  unpinned: boolean | null;
  visible: boolean;
  closed: boolean;
  archived: boolean;
  bookmarked: boolean | null;
  liked: boolean | null;
  views: number;
  like_count: number;
  has_summary: boolean;
  archetype_type: string;
  last_poster_username: string;
  category_id: number;
  pinned_globally: boolean;
  featured_link: string | null;
  has_accepted_answer: boolean;
  posters: Array<{
    extras: string | null;
    description: string;
    user_id: number;
    primary_group_id: number | null;
  }>;
}

// Interface para a resposta da API (Latest Topics)
export interface DiscourseLatestTopicsResponse {
  users: Array<{
    id: number;
    username: string;
    name: string;
    avatar_template: string;
  }>;
  primary_groups: Array<any>;
  topic_list: {
    can_create_topic: boolean;
    more_topics_url: string;
    draft: any;
    draft_key: string;
    draft_sequence: number;
    per_page: number;
    topics: DiscourseTopic[];
  };
}

// Configuração da API (substituir pela URL real do seu fórum quando criado)
// const DISCOURSE_BASE_URL = 'https://forum.simpleit.app.br'; // Exemplo
// const API_USERNAME = 'system'; // Usuário para autenticação (se necessário)
// const API_KEY = 'YOUR_API_KEY'; // Chave de API (para operações protegidas)

/**
 * Busca os tópicos mais recentes do fórum Discourse
 * @returns Promise com a lista de tópicos
 */
export const fetchLatestTopics = async (): Promise<DiscourseTopic[]> => {
  try {
    // Em um cenário real, descomentar a chamada fetch abaixo:
    // const response = await fetch(`${DISCOURSE_BASE_URL}/latest.json`);
    // if (!response.ok) throw new Error('Erro ao buscar tópicos');
    // const data: DiscourseLatestTopicsResponse = await response.json();
    // return data.topic_list.topics;

    // Retornando dados mockados para demonstração
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: 'Como otimizar relatórios no RM?',
            slug: 'como-otimizar-relatorios-rm',
            posts_count: 25,
            reply_count: 24,
            highest_post_number: 25,
            image_url: null,
            created_at: new Date().toISOString(),
            last_posted_at: new Date().toISOString(),
            bumped: true,
            bumped_at: new Date().toISOString(),
            archetype: 'regular',
            unseen: false,
            pinned: false,
            unpinned: null,
            visible: true,
            closed: false,
            archived: false,
            bookmarked: null,
            liked: null,
            views: 342,
            like_count: 15,
            has_summary: false,
            archetype_type: 'regular',
            last_poster_username: 'joaosilva',
            category_id: 1,
            pinned_globally: false,
            featured_link: null,
            has_accepted_answer: false,
            posters: []
          },
          {
            id: 2,
            title: 'Integração com API externa - Dúvidas',
            slug: 'integracao-api-externa',
            posts_count: 19,
            reply_count: 18,
            highest_post_number: 19,
            image_url: null,
            created_at: new Date().toISOString(),
            last_posted_at: new Date().toISOString(),
            bumped: true,
            bumped_at: new Date().toISOString(),
            archetype: 'regular',
            unseen: false,
            pinned: false,
            unpinned: null,
            visible: true,
            closed: false,
            archived: false,
            bookmarked: null,
            liked: null,
            views: 256,
            like_count: 8,
            has_summary: false,
            archetype_type: 'regular',
            last_poster_username: 'mariasantos',
            category_id: 2,
            pinned_globally: false,
            featured_link: null,
            has_accepted_answer: true,
            posters: []
          }
        ]);
      }, 1000);
    });
  } catch (error) {
    console.error('Erro ao conectar com Discourse:', error);
    return [];
  }
};

/**
 * Cria um novo tópico no fórum (Requer Autenticação/SSO)
 */
export const createTopic = async (title: string, raw: string, categoryId: number) => {
  // Implementação futura:
  // POST /posts.json
  // Body: { title, raw, category: categoryId }
  // Headers: { 'Api-Key': ..., 'Api-Username': ... }
  console.log('Criando tópico:', { title, raw, categoryId });
  return { success: true, message: 'Tópico criado (simulação)' };
};
