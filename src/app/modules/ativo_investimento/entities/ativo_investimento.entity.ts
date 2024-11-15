import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { CategoriaInvestimento } from '../../categoria_investimento/entities/categoria_investimento.entity';
import { AtivoUsuario } from '../../ativo_usuario/entities/ativo_usuario.entity';

@Entity('ativo_investimento')
export class AtivoInvestimento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  desc_ativo: string;

  @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
  sigla_ativo: string;

  @Column({ type: 'integer', nullable: false })
  id_categoria: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dt_criacao: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dt_atualizacao: Date;
}
