-- phpMyAdmin SQL Dump
-- version 4.0.10.12
-- http://www.phpmyadmin.net
--
-- Servidor: 127.6.224.130:3306
-- Tempo de Geração: 22/02/2016 às 00:33
-- Versão do servidor: 5.5.45
-- Versão do PHP: 5.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de dados: `2015`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `metas`
--

CREATE TABLE IF NOT EXISTS `metas` (
  `idMeta` int(11) NOT NULL AUTO_INCREMENT,
  `indicador` varchar(100) NOT NULL,
  `meta` decimal(10,2) NOT NULL,
  `descricao` varchar(500) NOT NULL,
  `formula` varchar(100) NOT NULL,
  `esclarecimento` varchar(2000) NOT NULL,
  PRIMARY KEY (`idMeta`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- Fazendo dump de dados para tabela `metas`
--

INSERT INTO `metas` (`idMeta`, `indicador`, `meta`, `descricao`, `formula`, `esclarecimento`) VALUES
(1, 'Meta 1', '100.00', 'Julgar quantidade maior de processos de conhecimento do que os distribuídos no ano corrente.', 'Total de Processos Julgados (PJ)/Total de Processos Distribuídos(PD) x 100.\n', 'Nas unidades de 1º Grau, Juizados Especiais e Turmas Recursais das Comarcas do Interior a meta estará cumprida se o percentual de cumprimento for igual ou maior que 100%, ou seja, se os julgamentos corresponderem à quantidade de processos distribuídos até o final do período de apuração e, no mínimo, mais 1 para as unidades que tenham estoque processual.'),
(2, 'Meta 2 - 1º Grau (Varas)', '80.00', 'Identificar e julgar, até 31/12/2015, pelo menos 80%, dos processos distribuídos até 31/12/2011, no 1º grau (Varas).', 'Total de Processos Julgados (PJ)/Total de Processos Distribuídos(PD) x 100.', 'A meta estará cumprida se o percentual de cumprimento for igual ou maior que 80%, no 1º grau.'),
(3, 'Meta 2 - Juizados Especiais e Turmas Recursais', '100.00', 'Identificar e julgar, até 31/12/2015, 100% dos processos distribuídos até 31/12/2013 (Turmas Recursais de Bacabal, Balsas, Caxias, Chapadinha, Pinheiro e Presidente Dutra).\n', 'Total de Processos Julgados (PJ)/Total de Processos Distribuídos(PD) x 100.', 'A meta estará cumprida se o percentual de cumprimento for igual ou maior que 100% para os Juizados Especiais e Turmas Recursais.'),
(4, 'Meta 4', '70.00', 'Identificar e julgar, até 31/12/2015, 70% das ações de improbidade administrativa e ações penais relacionadas a crimes contra a administração pública, distribuídas até 31/12/2012.', 'Total de Processos Julgados (PJ)/Total de Processos Distribuídos(PD) x 100.', 'A meta estará cumprida se o percentual de cumprimento for pelo menos 70%.'),
(5, 'Meta 6', '100.00', 'Identificar e julgar, até 31/12/2015, as ações coletivas distribuídas até 31/12/2012.', 'Total de Processos Julgados (PJ)/Total de Processos Distribuídos(PD) x 100.', 'A meta estará cumprida se o percentual de cumprimento for igual a 100%.'),
(6, 'Meta 8', '10.00', 'Arquivar, até o final do período de apuração, 10% do acervo existente na unidade em 31/12/2014, nas Varas, Juizados e Turmas Recursais.', '[1-(Acervo Final (AF)/ Acervo Inicial (AI)]x100 >= 10', 'A meta estará cumprida se o percentual de cumprimento for igual ou maior que 10%, ou seja, se o acervo final corresponder à menos 10% do acervo inicial ao final do período de apuração.'),
(7, 'Índice de produtividade no cálculo de custas (Meta 1)', '95.00', 'Concluir quantidade correspondente a 95% das custas recebidas.', '[Total de custas concluídas no período / (custas recebidas no período + acervo)] X 100.', 'A meta é mensurável a partir do Sistema Jurisconsult, através dos Relatórios\r\n "Dados para índices setores-Remessas para setor destino" localizado na aba\r\n "Primeiro Grau" do referido sistema. A Divisão de Informática disponibilizará o\r\n rol de processos com custas pendentes até 31 de dezembro do ano anterior ao período de medição, quando existirem esses processos comporão o\r\n acervo da unidade. O indicador é calculado determinando-se a razão entre o\r\n número de processos entrantes no período de medição (determinado pelo relatório acima marcando-se a opção destino) e o número de processos com\r\n custas calculadas (determinado pelo relatório acima marcando-se a opção\r\n origem).'),
(8, 'Índice de produtividade no cálculo de custas (Meta 2)', '95.00', 'Garantir a eliminação de 95% do acervo existente do ano anterior.', '[Total de custas concluídas no período / (custas recebidas no período + acervo)] X 100.', 'A meta é mensurável a partir do Sistema Jurisconsult, através dos Relatórios\r\n "Dados para índices setores-Remessas para setor destino" localizado na aba\r\n "Primeiro Grau" do referido sistema. A Divisão de Informática disponibilizará o\r\n rol de processos com custas pendentes até 31 de dezembro do ano anterior ao período de medição, quando existirem esses processos comporão o\r\n acervo da unidade. O indicador é calculado determinando-se a razão entre o\r\n número de processos entrantes no período de medição (determinado pelo relatório acima marcando-se a opção destino) e o número de processos com\r\n custas calculadas (determinado pelo relatório acima marcando-se a opção\r\n origem).'),
(9, 'Índice de agilidade no atendimento do pedido.', '90.00', 'Atender 90% dos pedidos no prazo de 3 dias úteis.', 'Total de pedidos (processos e documentos do DIGIDOC) atendidos no prazo / total de pedidos] X 100.', 'A meta é mensurável a partir do Sistema Digidoc, através dos relatórios "\r\nrelatório\r\n de\r\n acompanhamento\r\n de\r\n processos\r\n no\r\n setor, relatório\r\n de Acompanhamento de Requisições no Setor e o relatório de acompanhamento de Documentos administrativos" No tocante aos processos o indicador segue a métrica\r\n convencional\r\n daqueles\r\n mensurados\r\n pelo\r\n Digidoc,para\r\n os\r\n documentos ressalta-se o prazo é contabilizado em dias úteis a partir da data\r\n de criação do documento pela unidade solicitante até o arquivamento do documento após o atendimento do pedido.'),
(10, 'Índice de produtividade na emissão de laudos periciais', '90.00', 'Devolver o equivalente a 90% da demanda de laudos periciais no período de referência', '(Total de laudos emitidos no período / demanda de processos de laudo no período)*100', 'A meta é mensurável a partir do Sistema Jurisconsult, através dos relatórios\r\n "Dados para índice setores-remessas para setor destino" localizado na aba\r\n "Primeiro Grau" do referido sistema. O indicador é calculado determinando-se a razão entre o número de processos entrantes no período de medição (determinado pelo relatório acima marcando-se a opção destino) e o número\r\n de processos com laudos emitidos (determinado pelo relatório acima\r\n marcando-se a opção origem).'),
(11, 'Índice de agilidade na distribuição das ações não-criminais', '98.00', 'Enviar 98% das ações não-criminais remetidas no prazo de 3 dias úteis', '(Total de ações não-criminais remetidas no prazo padrão/Total de ações distribuídas) X 100', 'A meta é mensurável a partir do Sistema Jurisconsult, através dos relatórios "Dados para índice da Distribuição" localizado na aba "Primeiro Grau" do referido sistema. A Divisão de Acompanhamento de Dados Estatísticos contabilizará a contagem do prazo em dias úteis.'),
(12, 'Índice de agilidade na distribuição das ações criminais', '95.00', 'Enviar 95% das ações criminais remetidas no prazo de 2 dias úteis', '(Total de ações criminais remetidas no prazo padrão/Total de ações criminais distribuídas) X 100', 'A meta é mensurável a partir do Sistema Jurisconsult, através dos relatórios "Dados para índice da Distribuição" localizado na aba "Primeiro Grau" do referido sistema. A Divisão de Acompanhamento de Dados Estatísticos contabilizará a contagem do prazo em dias úteis.');

-- --------------------------------------------------------

--
-- Estrutura para tabela `metasunidades`
--

CREATE TABLE IF NOT EXISTS `metasunidades` (
  `idMetasUnidades` int(11) NOT NULL AUTO_INCREMENT,
  `fk_idUnidade` int(11) NOT NULL,
  `fk_idMeta` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `apurado` int(11) NOT NULL,
  `dataApuracao` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idMetasUnidades`),
  KEY `fk_idUnidade` (`fk_idUnidade`),
  KEY `fk_idMeta` (`fk_idMeta`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=36 ;

--
-- Fazendo dump de dados para tabela `metasunidades`
--

INSERT INTO `metasunidades` (`idMetasUnidades`, `fk_idUnidade`, `fk_idMeta`, `total`, `apurado`, `dataApuracao`) VALUES
(1, 1, 1, 920, 515, '2016-01-11 11:35:50'),
(2, 1, 2, 893, 110, '2016-01-11 11:36:00'),
(3, 1, 4, 58, 15, '2016-01-08 05:00:00'),
(4, 1, 5, 73, 17, '2016-01-08 05:00:00'),
(5, 1, 6, 1416, 998, '2016-01-08 05:00:00'),
(6, 2, 1, 1052, 820, '2016-01-11 11:37:35'),
(7, 2, 2, 1098, 160, '2016-01-11 11:37:54'),
(8, 2, 4, 17, 2, '2016-01-11 11:38:23'),
(10, 2, 6, 1041, 828, '2016-01-11 11:38:37'),
(11, 3, 1, 262, 369, '2016-01-11 11:39:09'),
(12, 3, 2, 51, 45, '2016-01-11 11:39:30'),
(13, 3, 4, 1, 1, '2016-01-09 05:00:00'),
(14, 3, 6, 273, 180, '2016-01-11 11:40:39'),
(15, 4, 1, 1051, 1132, '2016-01-11 11:41:11'),
(16, 4, 2, 177, 152, '2016-01-11 11:41:41'),
(18, 4, 6, 843, 367, '2016-01-11 11:42:34'),
(19, 5, 1, 166, 279, '2016-01-11 11:43:06'),
(20, 5, 2, 91, 77, '2016-01-11 11:43:18'),
(21, 5, 4, 1, 1, '2016-01-09 05:00:00'),
(22, 5, 6, 105, 19, '2016-01-11 11:43:47'),
(23, 6, 1, 1532, 2122, '2016-01-11 11:44:18'),
(24, 6, 3, 136, 136, '2016-01-11 11:44:50'),
(25, 6, 6, 2253, 688, '2016-01-11 11:45:22'),
(26, 7, 1, 1021, 1136, '2016-01-11 11:45:54'),
(27, 7, 3, 1, 1, '2016-01-09 05:00:00'),
(29, 7, 6, 216, 2, '2016-01-09 05:00:00'),
(30, 8, 7, 520, 515, '2016-02-15 15:28:27'),
(31, 8, 8, 5, 5, '2016-01-09 05:00:00'),
(32, 9, 9, 284, 271, '2016-02-15 15:29:52'),
(33, 9, 10, 58, 67, '2016-02-15 15:30:21'),
(34, 10, 11, 3980, 3980, '2016-02-15 15:30:45'),
(35, 10, 12, 904, 901, '2016-02-15 15:31:06');

-- --------------------------------------------------------

--
-- Estrutura para tabela `unidades`
--

CREATE TABLE IF NOT EXISTS `unidades` (
  `idUnidade` int(11) NOT NULL AUTO_INCREMENT,
  `siglaUnidade` varchar(6) NOT NULL,
  `tipoUnidade` char(1) NOT NULL,
  `nomeUnidade` varchar(50) NOT NULL,
  `login` varchar(20) NOT NULL,
  `senha` varchar(20) NOT NULL,
  `pontuacao` decimal(10,2) NOT NULL,
  PRIMARY KEY (`idUnidade`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- Fazendo dump de dados para tabela `unidades`
--

INSERT INTO `unidades` (`idUnidade`, `siglaUnidade`, `tipoUnidade`, `nomeUnidade`, `login`, `senha`, `pontuacao`) VALUES
(1, '1VCAX', 'J', 'Primeira Vara', 'primeira', 'primeira', '2881.22'),
(2, '2VCAX', 'J', 'Segunda Vara', 'segunda', 'segunda', '2596.67'),
(3, '3VCAX', 'J', 'Terceira Vara', 'terceira', 'terceira', '9156.96'),
(4, '4VCAX', 'J', 'Quarta Vara', 'quarta', 'quarta', '9477.60'),
(5, '5VCAX', 'J', 'Quinta Vara', 'quinta', 'quinta', '9864.32'),
(6, 'JECAX', 'J', 'Juizado Especial', 'juizado', 'juizado', '8748.48'),
(7, 'TRCAX', 'J', 'Turma Recursal', 'recursal', 'recursal', '9380.16'),
(8, 'SJCCAX', 'A', 'Contadoria do Fórum', 'contadoria', 'contadoria', '7200.96'),
(9, 'DFOCAX', 'A', 'Diretoria do Fórum', 'diretoria', 'diretoria', '8262.72'),
(10, 'SJDCAX', 'A', 'Distribuição do Fórum', 'distribuicao', 'distribuicao', '8386.24'),
(11, 'DIR', 'D', 'Juiz Diretor do Fórum', 'juiz', 'juiz', '0.00');

-- --------------------------------------------------------

--
-- Estrutura stand-in para view `v_consulta_completa`
--
CREATE TABLE IF NOT EXISTS `v_consulta_completa` (
`idMeta` int(11)
,`indicador` varchar(100)
,`meta` decimal(10,2)
,`descricao` varchar(500)
,`formula` varchar(100)
,`esclarecimento` varchar(2000)
,`idUnidade` int(11)
,`siglaUnidade` varchar(6)
,`tipoUnidade` char(1)
,`nomeUnidade` varchar(50)
,`login` varchar(20)
,`senha` varchar(20)
,`pontuacao` decimal(10,2)
,`idMetasUnidades` int(11)
,`fk_idUnidade` int(11)
,`fk_idMeta` int(11)
,`total` int(11)
,`apurado` int(11)
,`dataApuracao` timestamp
);
-- --------------------------------------------------------

--
-- Estrutura para view `v_consulta_completa`
--
DROP TABLE IF EXISTS `v_consulta_completa`;

CREATE ALGORITHM=UNDEFINED DEFINER=`adminxmKVNph`@`127.6.224.130` SQL SECURITY DEFINER VIEW `v_consulta_completa` AS select `metas`.`idMeta` AS `idMeta`,`metas`.`indicador` AS `indicador`,`metas`.`meta` AS `meta`,`metas`.`descricao` AS `descricao`,`metas`.`formula` AS `formula`,`metas`.`esclarecimento` AS `esclarecimento`,`unidades`.`idUnidade` AS `idUnidade`,`unidades`.`siglaUnidade` AS `siglaUnidade`,`unidades`.`tipoUnidade` AS `tipoUnidade`,`unidades`.`nomeUnidade` AS `nomeUnidade`,`unidades`.`login` AS `login`,`unidades`.`senha` AS `senha`,`unidades`.`pontuacao` AS `pontuacao`,`metasunidades`.`idMetasUnidades` AS `idMetasUnidades`,`metasunidades`.`fk_idUnidade` AS `fk_idUnidade`,`metasunidades`.`fk_idMeta` AS `fk_idMeta`,`metasunidades`.`total` AS `total`,`metasunidades`.`apurado` AS `apurado`,`metasunidades`.`dataApuracao` AS `dataApuracao` from ((`metas` join `unidades`) join `metasunidades`) where ((`metas`.`idMeta` = `metasunidades`.`fk_idMeta`) and (`unidades`.`idUnidade` = `metasunidades`.`fk_idUnidade`));

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `metasunidades`
--
ALTER TABLE `metasunidades`
  ADD CONSTRAINT `metasunidades_ibfk_1` FOREIGN KEY (`fk_idUnidade`) REFERENCES `unidades` (`idUnidade`),
  ADD CONSTRAINT `metasunidades_ibfk_2` FOREIGN KEY (`fk_idMeta`) REFERENCES `metas` (`idMeta`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
